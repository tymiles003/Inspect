import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('Welcome');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialState = AppNavigator.router.getStateForAction(
  secondAction,
  tempNavState
);

export default (state = initialState, action) => {
    switch(action.type) {
        case "Login":
            return AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName: "Login"}),
                state
            );
        case "Welcome":
            console.log('acting on welcome action');
            return AppNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName: "Welcome"})
            );
        default:
            return state;
    }
};