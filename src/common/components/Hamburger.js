// @flow

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class Hamburger extends Component {
  props: {
    onDrawerOpen: Function,
  };

  render() {
    const { onDrawerOpen } = this.props;
    return (
      <View style={styles.container}>
        <Icon
          onPress={() => onDrawerOpen()}
          name="menu"
          size={24}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { Hamburger };
