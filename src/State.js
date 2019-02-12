import React, { useContext } from 'react';

import Context from './context';

const ResourceContext = React.createContext('resource');
const { Provider, Consumer } = ResourceContext;

export default ({ children, transform, name, defaultValue }) => {
  const { getData } = useContext(Context);
  let resourceData = getData(name) || defaultValue;

  if (transform) {
    resourceData = transform(resourceData);
  }

  return (
    <Provider value={resourceData}>
      <Consumer>{children}</Consumer>
    </Provider>
  );
};
