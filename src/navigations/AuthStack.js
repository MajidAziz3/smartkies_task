import React, {useEffect} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {ACCOUNT_CREATION, CAMERASCAN, DOCUMENTSELECTION, FACEIDENTITYINTRO, FACERECOGNIZATION, FINISH, INFORMATION, INTRODUCATION, NOTVERIFIEDEMAIL, ONBOARDING, OTP_SCREEN, PASSWORD, ROUTE_SIGNIN, SHOWIMAGES, SIGNUP_FORM, SIGNUP_INTRO, USERTASTE, VERIFYIDENTITY, VERIFYMAIL} from '../helpers/RouteName';
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
import { SignupIntro } from '../screens/authScreens/signup/signupdocument/SignUpIntro';
import { VerifyIdentity } from '../screens/authScreens/signup/signupdocument/VerifyIdentity';
import { DocumentSelection } from '../screens/authScreens/signup/signupdocument/DocumentSelection';
import { CameraScan } from '../screens/authScreens/signup/signupdocument/CameraScan';
import { ShowImages } from '../screens/authScreens/signup/signupdocument/ShowImages';
import { FaceIdentityIntro } from '../screens/authScreens/signup/signupdocument/FaceIdentityIntro';
import { FaceRecognization } from '../screens/authScreens/signup/signupdocument/FaceRecognization';

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
      <Stack.Screen name={SIGNUP_INTRO} component={SignupIntro} />
      <Stack.Screen name={VERIFYIDENTITY} component={VerifyIdentity} />
      <Stack.Screen name={DOCUMENTSELECTION} component={DocumentSelection} />
      <Stack.Screen name={CAMERASCAN} component={CameraScan} />
      <Stack.Screen name={SHOWIMAGES} component={ShowImages} />
      <Stack.Screen name={FACEIDENTITYINTRO} component={FaceIdentityIntro} />
      <Stack.Screen name={FACERECOGNIZATION} component={FaceRecognization} />
    </Stack.Navigator>
  );
}
