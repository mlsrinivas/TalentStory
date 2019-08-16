import React from 'react';
import AuthLoadingScreen from './src';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <AuthLoadingScreen />
    );
  }
}