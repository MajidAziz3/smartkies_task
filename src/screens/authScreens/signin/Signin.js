import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/headers/Header';
import Input from '../../../components/inputs/Input';
import {
  PoppinsBold,
  PoppinsRegular,
  PoppinsSemiBold,
} from '../../../helpers/fontName';
import {Scaling} from '../../../helpers/scaling';
import Entypo from 'react-native-vector-icons/Entypo';
import CheckBox from '@react-native-community/checkbox';
import DEFAULT_COLORS from '../../../helpers/colors';
import Button from '../../../components/buttons/Button';
import {ACCOUNT_CREATION, } from '../../../helpers/RouteName';

export const SignIn = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordShow, setPasswordShow] = useState(true);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View style={{flex: 1, marginHorizontal: Scaling.verticalScale(16)}}>
      <Header onPress={() => props.navigation.goBack()} />
      <Text
        style={{
          fontSize: Scaling.verticalScale(32),
          marginTop: Scaling.verticalScale(30),
          fontWeight: '700',
          color: '#000000',
          fontFamily: PoppinsBold,
        }}>
        Hello,
      </Text>
      <Text
        style={{
          fontSize: Scaling.verticalScale(24),
          marginTop: Scaling.verticalScale(5),
          fontWeight: '600',
          color: '#333333',
          fontFamily: PoppinsSemiBold,
        }}>
        Welcome Back
      </Text>
      <View>
        <Input
          placeholder={'Example@gmail.com'}
          value={email}
          onChangeText={text => setEmail(text)}
          label={'Email or Phone Number'}
        />
        <Input
          placeholder={'*** *** **'}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={passwordShow}
          label={'Password'}>
          <Entypo
            onPress={() => setPasswordShow(!passwordShow)}
            name={passwordShow ? 'eye' : 'eye-with-line'}
            size={30}
          />
        </Input>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: Scaling.verticalScale(10),
        }}>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text
            style={{
              fontSize: Scaling.verticalScale(14),
              marginTop: Scaling.verticalScale(5),
              fontWeight: '400',
              color: '#333333',
              fontFamily: PoppinsRegular,
            }}>
            Remember me
          </Text>
        </View>
        <Text
          style={{
            fontSize: Scaling.verticalScale(14),
            marginTop: Scaling.verticalScale(5),
            fontWeight: '600',
            color: DEFAULT_COLORS.primary,
            fontFamily: PoppinsSemiBold,
          }}>
          Forgot Password?
        </Text>
      </View>
      <View style={{marginTop: Scaling.verticalScale(30)}}>
        <Button width={Scaling.horizontalScale(380)}>Login</Button>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Text
          style={{
            fontSize: Scaling.verticalScale(14),
            fontWeight: '600',
            textAlign: 'center',
            color: DEFAULT_COLORS.textColor2,
            fontFamily: PoppinsSemiBold,
            marginBottom: Scaling.verticalScale(10),
          }}>
          Don’t have an account yet?{' '}
          <Text
            onPress={() => props.navigation.navigate(ACCOUNT_CREATION)}
            style={{
              color: DEFAULT_COLORS.primary,
            }}>
            Sign Up
          </Text>
        </Text>
      </View>
    </View>
  );
};
