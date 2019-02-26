import React from 'react';
import { useGet } from './hooks';

const { Provider, Consumer } = React.createContext('get');

export default ({ children, ...rest }) => {
  const { data, busy } = useGet(rest);

  return (
    <Provider value={{ data, busy }}>
      <Consumer>{children}</Consumer>
    </Provider>
  );
};
