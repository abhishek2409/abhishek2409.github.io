import React from 'react';

export function asyncComponent(getComponent) {
  return class AsyncComponent extends React.Component {
    static Component = null;
    state = { Component: AsyncComponent.Component };

    componentWillMount() {
      if (!this.state.Component) {
        getComponent().then(Component => {
          AsyncComponent.Component = Component
          this.setState({ Component })
        })
      }
    }
    render() {
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }
  }
}


export function loadRoute(cb) {
  return module => cb(null, module.default);
}

export function errorLoading(error) {
  throw new Error(`Dynamic page loading failed: ${error}`);
}
