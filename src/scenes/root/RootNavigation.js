// @flow

import { DrawerNavigator } from 'react-navigation';

import TodoNavigation from '../todo';

const routes = {
  Todo: {
    screen: TodoNavigation,
    navigationOptions: {
      drawerLabel: 'Todo',
    },
  },
};

const config = {};

const AppNavigation = DrawerNavigator(routes, config);

export const initialRouteName = 'Todo';

export default AppNavigation;
