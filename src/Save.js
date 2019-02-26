import React from 'react';
import { useSave } from './hooks';

const { Provider, Consumer } = React.createContext('save');

export default ({ children, ...rest }) => {
  const { save, busy } = useSave(rest);

  return (
    <Provider value={{ save, busy }}>
      <Consumer>{children}</Consumer>
    </Provider>
  );
};
