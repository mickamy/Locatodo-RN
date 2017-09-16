import RootNavigation from '../scenes/root/RootNavigation';

const NavigationReducer = (state, action) => {
  const newState = RootNavigation.router.getStateForAction(action, state);
  return newState || state;
};

export default NavigationReducer;
