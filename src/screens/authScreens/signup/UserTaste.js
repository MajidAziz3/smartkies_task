import React from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from '../../../components/buttons/Button';
import Header from '../../../components/headers/Header';
import DEFAULT_COLORS from '../../../helpers/colors';
import { PoppinsBold, PoppinsSemiBold } from '../../../helpers/fontName';
import { FINISH } from '../../../helpers/RouteName';
import {Scaling} from '../../../helpers/scaling';

export const UserTaste = props => {
  return (
    <View style={{flex: 1}}>
      <Header
        onPress={() => props.navigation.goBack()}
        left={105}
        headerText={'User Taste'}>
        <Entypo
          style={{
            marginHorizontal: Scaling.horizontalScale(10),
            marginTop: Scaling.verticalScale(3),
          }}
          name="cross"
          size={25}
          color={'#828282'}
        />
      </Header>
      <View style={{marginHorizontal: Scaling.horizontalScale(16)}}>
        <Text
          style={{
            fontSize: Scaling.verticalScale(24),
            marginTop: Scaling.verticalScale(20),
            fontWeight: '700',
            color: '#333333',
            fontFamily: PoppinsBold,
          }}>
          To know as a user
        </Text>
        <Text
          style={{
            fontSize: Scaling.verticalScale(14),
            fontWeight: '400',
            color: DEFAULT_COLORS.textColor,
            fontFamily: PoppinsSemiBold,
            marginBottom: Scaling.verticalScale(10),
          }}>
          We will make recommendations based on your response to your inquiry.
        </Text>
        <Text
          style={{
            fontSize: Scaling.verticalScale(16),
            fontWeight: '400',
            color: DEFAULT_COLORS.textColor2,
            fontFamily: PoppinsSemiBold,
            marginTop: Scaling.verticalScale(20),
          }}>
          Are you here just to become a customer for reservations
        </Text>
        <View style={{flexDirection:'row',marginTop:Scaling.verticalScale(20),}}>
          <Button width={Scaling.horizontalScale(94)}>Yes</Button> 
          <View style={{marginHorizontal:Scaling.horizontalScale(20)}}>
          <Button gray width={Scaling.horizontalScale(94)} color='#F1F5FE'>No</Button>
         
          </View>
          </View>
          <View style={{borderBottomWidth:1,borderBottomColor:DEFAULT_COLORS.textColor,marginTop:Scaling.verticalScale(20)
        }}/>
         <Text
          style={{
            fontSize: Scaling.verticalScale(16),
            fontWeight: '400',
            color: DEFAULT_COLORS.textColor2,
            fontFamily: PoppinsSemiBold,
            marginTop: Scaling.verticalScale(20),
          }}>
          Are you looking for opportunities to enter your accommodation as a client
        </Text>
         <View style={{flexDirection:'row',marginTop:Scaling.verticalScale(20),}}>
          <Button  gray width={Scaling.horizontalScale(94)} color='#F1F5FE'>Yes</Button> 
          <View style={{marginHorizontal:Scaling.horizontalScale(20)}}>
          <Button gray width={Scaling.horizontalScale(94)} color='#F1F5FE'>No</Button>
         
          </View>
          </View>
          <View style={{borderBottomWidth:1,borderBottomColor:DEFAULT_COLORS.textColor,marginTop:Scaling.verticalScale(20)
        }}/>
         <Text
          style={{
            fontSize: Scaling.verticalScale(16),
            fontWeight: '400',
            color: DEFAULT_COLORS.textColor2,
            fontFamily: PoppinsSemiBold,
            marginTop: Scaling.verticalScale(20),
          }}>
          Are you seeking for any opportunities to work with our customer as a service provider?
        </Text>
         <View style={{flexDirection:'row',marginTop:Scaling.verticalScale(20),}}>
          <Button gray width={Scaling.horizontalScale(94)} color='#F1F5FE'>Yes</Button> 
          <View style={{marginHorizontal:Scaling.horizontalScale(20)}}>
          <Button  width={Scaling.horizontalScale(94)}>No</Button>
         
          </View>
          </View>
          <View style={{borderBottomWidth:1,borderBottomColor:DEFAULT_COLORS.textColor,marginTop:Scaling.verticalScale(20)
        }}/>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: Scaling.verticalScale(15),
        }}>
        <Button
          onPress={() => props.navigation.navigate(FINISH)}
          width={Scaling.horizontalScale(382)}>
          Finish
        </Button>
      </View>
    </View>
  );
};
