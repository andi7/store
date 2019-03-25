import React, { useContext } from 'react';
import axios from 'axios';

import Context from '../context';

export default ({ path, name, params = {}, headers = {} }) => {
  const { apiUrl, setBusy, getBusy, globalHeaders } = useContext(Context);
  const busyName = `delete${name}`;

  const destroy = () => {
    return new Promise((resolve, reject) => {
      setBusy(busyName);

      axios({
        method: 'delete',
        url: `${apiUrl}/${path.replace(/:(\w+)/, (_, group) => params[group])}`,
        headers: { ...globalHeaders(), ...headers }
      })
        .then(response => resolve(response.data))
        .catch(err => reject(err))
        .finally(() => setBusy(busyName, false));
    });
  };

  return { destroy, busy: getBusy(busyName) };
};
