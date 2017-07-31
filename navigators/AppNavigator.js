import React from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import WelcomeScreen from '../components/welcome_screen/WelcomeScreen';
import LoginScreen from '../components/login_screen/LoginScreen';

export const AppNavigator = TabNavigator({
    Welcome: {screen: WelcomeScreen},
    Login: {screen: LoginScreen}
});

const AppWithNavState = ({dispatch, nav}) => {
    return <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})} />
};

const mapStateToProps = state => ({
    nav: state.NavReducer
});

export default connect(mapStateToProps)(AppWithNavState);