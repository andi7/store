import React from 'react';
import { useDelete } from './hooks';

const ResourceContext = React.createContext('destroy');
const { Provider, Consumer } = ResourceContext;

export default ({ children, show, ...rest }) => {
  const { destroy, busy } = useDelete(rest);

  if (!show) {
    children = () => null;
  }

  return (
    <Provider value={{ destroy, busy }}>
      <Consumer>{children}</Consumer>
    </Provider>
  );
};
