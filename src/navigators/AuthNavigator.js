import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CommonHeader from '../components/CommonHeader'
import IntroScreen from '../scenes/LoginFlowScreens/IntroScreen'
import LoginScreen from '../scenes/LoginFlowScreens/LoginScreen'

const Stack = createStackNavigator();
const AuthNavigator = () => {
    return (
        <Stack.Navigator mode={"card"} initialRouteName={"IntroScreen"} >
            <Stack.Screen name={"IntroScreen"} component={IntroScreen} options={{
                // header: (props) => <CommonHeader {...props} title={""} />
            }} />
            <Stack.Screen name={"LoginScreen"} component={LoginScreen} options={{
                // header: (props) => <CommonHeader {...props} title={""} />
            }} />
        </Stack.Navigator>
    );
}
export default AuthNavigator;