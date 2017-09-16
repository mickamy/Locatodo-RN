// @flow

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigation from './src/scenes/root';
import stores from './src/stores';

class App extends Component {
  render() {
    return (
      <Provider store={stores}>
        <View style={styles.container}>
          <AppNavigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
