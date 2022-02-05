import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import DEFAULT_COLORS from '../../helpers/colors';
import Swiper from 'react-native-swiper';
import {OnboardCard} from '../../components/onboardcard/OnboardCard';
import {Images} from '../../assets/images';
import Button from '../../components/buttons/Button';
import { Scaling } from '../../helpers/scaling';
import { PoppinsRegular } from '../../helpers/fontName';
import { ACCOUNT_CREATION, ROUTE_SIGNIN } from '../../helpers/RouteName';

export const OnBoarding = props => {
  return (
    <View style={{flex: 1, backgroundColor: DEFAULT_COLORS.background}}>
      <StatusBar hidden />
      <View style={{flex:1}}>
      <Swiper activeDot={ <View  style={{
    backgroundColor: DEFAULT_COLORS.primary,
    width: 30,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3
  }}></View>}>
        <OnboardCard
          header={'control everything with your phone.'}
          Description={
            'To make life easier, use your phone as a remote to control everything in your life'
          }>
          <Images.Slide1 />
        </OnboardCard>
        <OnboardCard
          header={'Not required to meet people'}
          Description={`To make a reservation or request a service  there's no need to start a conversation.`}>
          <Images.Slide2 />
        </OnboardCard>
        <OnboardCard
          header={'Choose the best'}
          Description={
            'For your property, hire the appropriate person and the correct service.'
          }>
          <Images.Slide3 />
        </OnboardCard>
      </Swiper>
      </View>
      <View
        style={{flex: 0.1,height:Scaling.verticalScale(125), flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Button onPress={()=>props.navigation.navigate(ACCOUNT_CREATION)}>Sign Up</Button>
        <Button color={'#ffffff'} onPress={()=>props.navigation.navigate(ROUTE_SIGNIN)}>Login</Button>
      </View>
      <Text
            style={{
              textAlign: 'center',
              fontSize: Scaling.verticalScale(14),
              marginVertical:Scaling.verticalScale(10),
              fontWeight: '400',
              color: DEFAULT_COLORS.primary,
              fontFamily: PoppinsRegular,
            }}>
              Open as a Guest
              </Text>
    </View>
  );
};
