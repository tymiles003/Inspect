import React, { Component } from 'react';
import { Text, Button, View} from 'react-native';

class LoginScreen extends Component {
    constructor(props) {
        super();
    }

    navigateToWelcome = () => {
        console.log('trying to navigate to welcome scree');
        this.props.navigation.dispatch({ type: "Welcome" });
    }

    render() {
        return (
            <View>
                <Text> Login </Text>
                <Button onPress={this.navigateToWelcome}
                        title={"Back to Welcome"}/>
            </View>
        )
    }
}

LoginScreen.navigationOptions = {
    title: "Login"
}

export default LoginScreen;