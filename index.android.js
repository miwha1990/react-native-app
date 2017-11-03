/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import { Provider } from 'mobx-react';
import store from './src/store';
import Stack from './src/router';

export default class NativeAgain extends Component {

  render() {
      return (
          <Provider myStore={store}>
            <Stack />
          </Provider>
      );
  }
}
AppRegistry.registerComponent('NativeAgain', () => NativeAgain);
