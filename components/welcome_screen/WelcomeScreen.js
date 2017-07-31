import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';

class WelcomeScreen extends Component {
    constructor(props) {
        super();
    }

    navigateToLogin = () => {
        this.props.navigation.dispatch({ type: "Login" });
    }

    render() {
        return (
            <View>
                <Text> Welcome! </Text>
                <Button onPress={this.navigateToLogin}
                        title={"Login"}/>
            </View>
        )
    }
}

WelcomeScreen.navigationOptions = {
    title: "Welcome"
}

const mapDispatchToProps = dispatch => ({
    showLoginScreen: () => dispatch(NavigationActions.navigate({ routeName: "Login" }))
})

export default connect(null, mapDispatchToProps)(WelcomeScreen);