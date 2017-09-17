// @flow

import React from 'react';
import { StackNavigator } from 'react-navigation';

import { Hamburger } from '../../common/components';
import TodoListScreen from './list/TodoListScreen';

const drawerLeft = navigation => <Hamburger onDrawerOpen={() => navigation.navigate('DrawerOpen')} />;

const routes = {
  TodoList: {
    screen: TodoListScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: drawerLeft(navigation),
    }),
  },
};

const config = {
  initialRouteName: 'TodoList',
};

const TodoNavigation = StackNavigator(routes, config);

export default TodoNavigation;
