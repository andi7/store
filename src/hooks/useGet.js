import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import Context from '../context';

export default ({
  name,
  transform,
  path,
  defaultValue,
  params = {},
  headers = {},
  replace = {},
  memoize = false
}) => {
  const replaceParams = str => str.replace(/:(\w+)/, (_, group) => replace[group]);

  const {
    setData,
    setBusy,
    getData,
    getBusy,
    apiUrl,
    globalHeaders,
    beforeGet,
    afterGet
  } = useContext(Context);
  const [resourceData, setResourceData] = useState(defaultValue);
  name = replaceParams(name);
  const currentValue = getData(name) || defaultValue;
  const refreshName = `refresh.${name}`;
  const paths = Array.isArray(path) ? path : [path];

  useEffect(() => {
    fetchItems();
    window.addEventListener(refreshName, handleRefresh);

    return () => {
      window.removeEventListener(refreshName, handleRefresh);
    };
  }, [name, ...paths, JSON.stringify(params), JSON.stringify(headers)]);

  const handleRefresh = () => {
    fetchItems();
  };

  const fetchItems = async () => {
    if (memoize && currentValue !== defaultValue) {
      setResourceData(currentValue);
      return;
    }

    setBusy(name);

    const requests = paths.map((pathName, index) => {
      let resourceParams = Array.isArray(params) ? params[index] : params;

      if (beforeGet) {
        resourceParams = beforeGet(resourceParams);
      }

      return axios({
        method: 'get',
        url: `${apiUrl}/${replaceParams(pathName)}`,
        params: resourceParams,
        headers: { ...globalHeaders(), headers }
      });
    });

    let data = await Promise.all(requests);
    data = data.map(response => response.data);

    if (afterGet) {
      data = data.map(entry => afterGet(entry));
    }

    if (transform) {
      data = transform(data.length > 1 ? data : data[0], params);
    }

    setData(name, data);
    setBusy(name, false);
    setResourceData(data);
  };

  return { data: resourceData, busy: getBusy(name) };
};
