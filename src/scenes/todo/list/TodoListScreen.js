// @flow

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class TodoListScreen extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>TodoListScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TodoListScreen;
