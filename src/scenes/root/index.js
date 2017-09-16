// @flow

import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import RootNavigation from './RootNavigation';

function ReduxNavigation(props: *) {
  const { dispatch, nav } = props;
  const navigation = addNavigationHelpers({
    dispatch,
    state: nav,
  });

  return <RootNavigation navigation={navigation} />;
}

const mapStateToProps = state => ({ nav: state.nav });

const connectedNavigation = connect(mapStateToProps)(ReduxNavigation);

export default connectedNavigation;
