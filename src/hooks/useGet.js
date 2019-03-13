import React, { useContext, useEffect, useState } from 'react';

import Context from '../context';
import useFetch from './useFetch';

export default props => {
  const replaceParams = str => str.replace(/:(\w+)/, (_, group) => replace[group]);

  let {
    name,
    path,
    defaultValue,
    params = {},
    headers = {},
    replace = {},
    memoize = false
  } = props;
  const { setData, getData } = useContext(Context);
  const [resourceData, setResourceData] = useState(defaultValue);
  name = replaceParams(name);
  const currentValue = getData(name) || defaultValue;
  const refreshName = `refresh.${name}`;
  const { get, busy } = useFetch({ transform, path });

  useEffect(() => {
    fetchItems();
    window.addEventListener(refreshName, handleRefresh);

    return () => {
      window.removeEventListener(refreshName, handleRefresh);
    };
  }, [name, JSON.stringify(path), JSON.stringify(params), JSON.stringify(headers)]);

  const handleRefresh = () => fetchItems();

  const fetchItems = async () => {
    if (memoize && currentValue !== defaultValue) {
      setResourceData(currentValue);
      return;
    }

    const data = await get({ params, headers, replace });

    setData(name, data);
    setResourceData(data);
  };

  return { data: resourceData, busy };
};
