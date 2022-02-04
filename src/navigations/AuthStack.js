import React ,{useEffect} from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import { ONBOARDING, ROUTE_SIGNIN } from '../helpers/RouteName';
import { OnBoarding } from '../screens/onBoarding/OnBoarding';
import { SignIn } from '../screens/authScreens/signin/Signin';


const Stack = createStackNavigator();

export default function AuthNavigation() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >

            <Stack.Screen name={ONBOARDING} component={OnBoarding}/>
            <Stack.Screen name={ROUTE_SIGNIN} component={SignIn} />
            

        </Stack.Navigator>
    )
}
