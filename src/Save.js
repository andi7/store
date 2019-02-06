import React, { useContext } from 'react';
import axios from 'axios';

import Context from './context';

const ResourceContext = React.createContext('create');
const { Provider, Consumer } = ResourceContext;

export default ({ children, path, name, validate, headers = {} }) => {
  const { apiUrl, setBusy, getBusy, globalHeaders, beforeSave } = useContext(Context);
  const busyName = `save${name}`;

  const save = ({ key, id, ...values }) => {
    return new Promise((resolve, reject) => {
      if (!validate(values)) {
        reject(new Error('Failed to pass validation'));
        return;
      }

      if (beforeSave) {
        values = beforeSave(values);
      }

      setBusy(busyName);

      axios({
        method: id ? 'patch' : 'post',
        url: `${apiUrl}/${path}${id ? `/${id}` : ''}`,
        data: values,
        headers: { ...globalHeaders(), headers }
      })
        .then(response => resolve(response.data))
        .catch(err => reject(err))
        .finally(() => setBusy(busyName, false));
    });
  };

  return (
    <Provider value={{ save, busy: getBusy(busyName) }}>
      <Consumer>{children}</Consumer>
    </Provider>
  );
};
