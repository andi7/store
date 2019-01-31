import React, { useContext } from 'react';
import { getPath } from 'utils';

import Context from './context';

const ResourceContext = React.createContext('resource');
const { Provider, Consumer } = ResourceContext;

export default ({ children, transform, name, defaultValue }) => {
  const { state } = useContext(Context);
  const { data } = state;
  let resourceData = getPath(data, name) || defaultValue;

  if (transform) {
    resourceData = transform(resourceData);
  }

  return (
    <Provider value={resourceData}>
      <Consumer>{children}</Consumer>
    </Provider>
  );
};
