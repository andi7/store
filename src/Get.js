import React, { useContext, useEffect } from 'react';
import axios from 'axios';

import Context from './context';

const ResourceContext = React.createContext('get');
const { Provider, Consumer } = ResourceContext;

export default ({ children, ...rest }) => {
  const { name, transform, path, defaultValue, params = {}, headers = {}, memoize = false } = rest;
  const { setData, setBusy, getData, getBusy, apiUrl, globalHeaders, afterGet } = useContext(
    Context
  );
  const currentValue = getData(name) || defaultValue;
  const refreshName = `refresh.${name}`;

  useEffect(
    () => {
      fetchItems();
      window.addEventListener(refreshName, handleRefresh);

      return () => {
        window.removeEventListener(refreshName, handleRefresh);
      };
    },
    [name, path, ...Object.values(params), ...Object.values(headers)] //to be changed
  );

  const handleRefresh = () => {
    fetchItems();
  };

  const fetchItems = async () => {
    if (memoize && currentValue !== defaultValue) {
      return;
    }

    setBusy(name);

    const paths = Array.isArray(path) ? path : [path];
    const requests = paths.map(pathName =>
      axios({
        method: 'get',
        url: `${apiUrl}/${pathName.replace(/:(\w+)/, (_, group) => params[group])}`,
        params,
        headers: { ...globalHeaders(), headers }
      })
    );

    let data = await Promise.all(requests);
    data = data.map(response => response.data);

    if (afterGet) {
      data = data.map(entry => afterGet(entry));
    }

    if (transform) {
      data = transform(data.length > 1 ? data : data[0]);
    }

    setData(name, data);
    setBusy(name, false);
  };

  return (
    <Provider value={{ data: currentValue, busy: getBusy(name) }}>
      <Consumer>{children}</Consumer>
    </Provider>
  );
};
