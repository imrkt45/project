import * as React from 'react';
import { View, Text } from "react-native"

const IntroScreen = (props) => {

    const navigateToScreen = (screenName, params) => {
        props.navigation.navigate(screenName, params)
    }

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
            <Text onPress={() => {
                navigateToScreen("LoginScreen", { name: "rajh", age: 6778 })
            }} style={{ fontSize: 18, color: "blue" }}>Click me</Text>
            <Text onPress={() => {
                navigateToScreen("LoginScreen", { name: "Shakti tiwari", age: 15 })
            }} style={{ fontSize: 18, color: "blue" }}>Click me</Text>
        </View>
    )
}
export default IntroScreen