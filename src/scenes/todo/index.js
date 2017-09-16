// @flow

import { StackNavigator } from 'react-navigation';

import TodoListScreen from './list/TodoListScreen';

const routes = {
  TodoList: {
    screen: TodoListScreen,
  },
};

const config = {
  initialRouteName: 'TodoList',
};

const TodoNavigation = StackNavigator(routes, config);

export default TodoNavigation;
