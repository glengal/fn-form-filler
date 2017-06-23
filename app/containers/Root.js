import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import App from './App';

export default class Root extends Component {

  static propTypes = {
    store: PropTypes.object.isRequired
  };

  render() {
    const {
      store,
      tab,
    } = this.props;

    console.log('root tab', tab);

    return (
      <Provider store={store} tab={tab}>
        <App tab={tab} />
      </Provider>
    );
  }
}
