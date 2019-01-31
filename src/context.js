import React from 'react';

const Context = React.createContext('store');
const { Provider, Consumer } = Context;

export default Context;
export { Provider, Consumer };
