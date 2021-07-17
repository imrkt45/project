import * as React from 'react';
import { View, Text } from "react-native"

const LoginScreen = (props) => {
    console.warn(props.route.params)
    const navigateToScreen = (screenName) => {
        props.navigation.navigate(screenName)
    }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text onPress={() => {
                navigateToScreen("IntroScreen")
            }} style={{ fontSize: 18, color: "blue" }}>Click me {props.route.params.name}</Text>
        </View>
    )
}
export default LoginScreen