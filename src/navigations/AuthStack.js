import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {ACCOUNT_CREATION, FINISH, INFORMATION, INTRODUCATION, NOTVERIFIEDEMAIL, ONBOARDING, OTP_SCREEN, PASSWORD, ROUTE_SIGNIN, SIGNUP_FORM, USERTASTE, VERIFYMAIL} from '../helpers/RouteName';
import {OnBoarding} from '../screens/onBoarding/OnBoarding';
import {SignIn} from '../screens/authScreens/signin/Signin';
import {AccountCreation} from '../screens/authScreens/signup/AccountCreation';
import { Introducation } from '../screens/authScreens/signup/IntroSignUp';
import { SignUpForm } from '../screens/authScreens/signup/SignUpForm';
import { OtpScreen } from '../screens/authScreens/signup/OtpScreen';
import { Password } from '../screens/authScreens/signup/Password';
import { VerifyMail } from '../screens/authScreens/signup/VerifyMail';
import { NotVerifiedEmail } from '../screens/authScreens/signup/NotVerifiedEmail';
import { Information } from '../screens/authScreens/signup/Information';
import { UserTaste } from '../screens/authScreens/signup/UserTaste';
import { Finish } from '../screens/authScreens/signup/Finish';

const Stack = createStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ONBOARDING} component={OnBoarding} />
      <Stack.Screen name={ROUTE_SIGNIN} component={SignIn} />
      <Stack.Screen name={ACCOUNT_CREATION} component={AccountCreation} />
      <Stack.Screen name={INTRODUCATION} component={Introducation} />
      <Stack.Screen name={SIGNUP_FORM} component={SignUpForm} />
      <Stack.Screen name={OTP_SCREEN} component={OtpScreen} />
      <Stack.Screen name={PASSWORD} component={Password} />
      <Stack.Screen name={VERIFYMAIL} component={VerifyMail} />
      <Stack.Screen name={NOTVERIFIEDEMAIL} component={NotVerifiedEmail} />
      <Stack.Screen name={INFORMATION} component={Information} />
      <Stack.Screen name={USERTASTE} component={UserTaste} />
      <Stack.Screen name={FINISH} component={Finish} />
    </Stack.Navigator>
  );
}
