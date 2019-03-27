import React, { Component } from 'react';
import { Provider } from './context';
import { setPath, getPath } from 'utils';

export default class StateProvider extends Component {
  constructor(props) {
    super(props);

    const { data = {}, busy = {}, shown = {} } = props;

    this.state = {
      data: { ...data },
      busy: { ...busy },
      shown: { ...shown }
    };
  }

  setData = (path, value) => {
    const { data } = this.state;

    setPath(data, path, value);
    this.setState({ data });
  };

  setBusy = (path, value = true) => {
    const { busy } = this.state;

    setPath(busy, path, !!value);
    this.setState({ busy });
  };

  setShown = (path, value = true) => {
    const { shown } = this.state;

    setPath(shown, path, !!value);
    this.setState({ shown });
  };

  getData = paths => {
    const { data } = this.state;

    if (!paths) {
      return data;
    } else if (!Array.isArray(paths)) {
      return getPath(data, paths);
    }

    return paths.reduce((acc, path) => ({ ...acc, [path]: getPath(data, path) }), {});
  };

  getBusy = path => {
    const { busy } = this.state;

    return !!getPath(busy, path);
  };

  getShown = path => {
    const { shown } = this.state;

    return !!getPath(shown, path);
  };

  refreshResource = name => {
    window.dispatchEvent(new CustomEvent(`refresh.${name}`));
  };

  render() {
    const {
      children,
      apiUrl = '',
      headers,
      beforeGet,
      afterGet,
      beforeSave,
      axiosConfig = {}
    } = this.props;
    const { setData, setBusy, setShown, getData, getBusy, getShown, refreshResource } = this;

    return (
      <Provider
        value={{
          setData,
          setBusy,
          setShown,
          getData,
          getBusy,
          getShown,
          apiUrl,
          refreshResource,
          globalHeaders: () => headers(getData()) || {},
          beforeGet,
          afterGet,
          beforeSave,
          axiosConfig
        }}
      >
        {children}
      </Provider>
    );
  }
}
