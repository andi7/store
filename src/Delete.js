import React, { useContext } from 'react';
import axios from 'axios';

import Context from './context';

const ResourceContext = React.createContext('create');
const { Provider, Consumer } = ResourceContext;

export default ({ children, path, name, id }) => {
  const { apiUrl, setBusy, getBusy } = useContext(Context);
  const busyName = `delete${name}`;

  const destroy = () => {
    return new Promise((resolve, reject) => {
      setBusy(busyName);

      axios({
        method: 'delete',
        url: `${apiUrl}/${path}/${id}`
      })
        .then(response => resolve(response.data))
        .catch(err => reject(err))
        .finally(() => setBusy(busyName, false));
    });
  };

  if (!id) {
    children = () => null;
  }

  return (
    <Provider value={{ destroy, busy: getBusy(busyName) }}>
      <Consumer>{children}</Consumer>
    </Provider>
  );
};
