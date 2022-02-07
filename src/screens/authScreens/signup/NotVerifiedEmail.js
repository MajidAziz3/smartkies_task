import React from "react";
import { View,Text,Image } from "react-native";
import Header from "../../../components/headers/Header";
import { Scaling } from "../../../helpers/scaling";
import Entypo from 'react-native-vector-icons/Entypo'
import { OnboardCard } from "../../../components/onboardcard/OnboardCard";
import { Images } from "../../../assets/images";
import DEFAULT_COLORS from "../../../helpers/colors";
import { Poppins, PoppinsRegular, PoppinsSemiBold } from "../../../helpers/fontName";
import Button from "../../../components/buttons/Button";
import { INFORMATION } from "../../../helpers/RouteName";

export const NotVerifiedEmail=props=>{
    return(
        <View style={{flex:1}}>
            <Header
        onPress={() => props.navigation.goBack()}
        left={105}
        headerText={'Verify Mail'}>
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
      <View style={{height:Scaling.verticalScale(650),justifyContent:'center',alignItems:'center'}}>
      <Image style={{height:Scaling.verticalScale(225),width:Scaling.horizontalScale(260)}} source={require('../../../assets/images/email.gif')} />
         <View
          style={{
            marginTop:Scaling.verticalScale(20),
            height: Scaling.verticalScale(50),
            width: Scaling.horizontalScale(341),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: Scaling.verticalScale(24),
              fontWeight: '600',
              color: DEFAULT_COLORS.textBlack,
              fontFamily: PoppinsSemiBold,
            }}>
            {'Open your mail'}
          </Text>
        </View>
        <View
          style={{
            marginTop:Scaling.verticalScale(10),
            height: Scaling.verticalScale(60),
            width: Scaling.horizontalScale(341),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: Scaling.verticalScale(14),
              fontWeight: '400',
              color: DEFAULT_COLORS.textColor2,
              fontFamily: PoppinsRegular,
            }}>
           { 'We have sent an email verification to your registered email address, which you must confirm in order to proceed to the next step.'}
          </Text>
        </View>
        <Text
            style={{
              textAlign: 'center',
              fontSize: Scaling.verticalScale(16),
              fontWeight: '400',
              color: DEFAULT_COLORS.primary,
              fontFamily: PoppinsSemiBold,
              marginTop:Scaling.verticalScale(50)
            }}>
            Open mail
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: Scaling.verticalScale(16),
              fontWeight: '400',
              color: DEFAULT_COLORS.textColor,
              fontFamily: PoppinsSemiBold,
              marginTop:Scaling.verticalScale(30)
            }}>
            Didn’t get the Mail?<Text style={{color:DEFAULT_COLORS.primary}}>Resend</Text> 

          </Text>
          
          <View style={{
              width:Scaling.horizontalScale(380),
    color: '#000',
    borderWidth: Scaling.verticalScale(2),
    borderColor: '#F6BB41',
    borderStyle:'dashed',
    borderRadius: Scaling.verticalScale(5),
    height: Scaling.verticalScale(45),
    flexDirection: 'row',
    marginVertical:Scaling.verticalScale(52),
    justifyContent: 'space-between',
    alignItems:'center'}}>
        <Entypo style={{marginHorizontal:Scaling.horizontalScale(10)}} name='warning' size={20} color={'#F6BB41'}
        />
          <Text
            style={{
              textAlign: 'center',
              fontSize: Scaling.verticalScale(15),
              fontWeight: '400',
              color: '#F6BB41',
              fontFamily: Poppins,
              marginHorizontal:Scaling.horizontalScale(10)
            }}>
                You must confirm your email address
              </Text>
          </View>
        </View>
        <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: Scaling.verticalScale(15),
        }}>
        <Button
          onPress={() => props.navigation.navigate(INFORMATION)}
          width={Scaling.horizontalScale(382)}>
          Continue
        </Button>
      </View>
        </View>
    )
}