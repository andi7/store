import React, { useContext } from 'react';
import axios from 'axios';

import Context from './context';

const ResourceContext = React.createContext('create');
const { Provider, Consumer } = ResourceContext;

export default ({ children, path, name, validate }) => {
  const { apiUrl, setBusy, getBusy } = useContext(Context);
  const busyName = `save${name}`;

  const save = async values => {
    if (!validate(values)) {
      return false;
    }

    setBusy(`save${name}`);

    const response = await axios({
      method: 'post',
      url: `${apiUrl}/${path}`,
      data: values
    });

    setBusy(busyName, false);

    return response.data;
  };

  return (
    <Provider value={{ save, busy: getBusy(busyName) }}>
      <Consumer>{children}</Consumer>
    </Provider>
  );
};
