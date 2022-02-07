import React,{useState} from "react";
import { View,Text, Image } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Header from "../../../components/headers/Header";
import { Scaling } from "../../../helpers/scaling";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { ROUTE_SIGNIN, SIGNUP_INTRO } from "../../../helpers/RouteName";
import Button from "../../../components/buttons/Button";
import DEFAULT_COLORS from "../../../helpers/colors";
import { PoppinsBold, PoppinsRegular, PoppinsSemiBold } from "../../../helpers/fontName";

export const Finish=props=>{
    const [rightSwipe, setRightSwipe] = useState(DEFAULT_COLORS.primary);
    const onSwipe = (gestureName, gestureState) => {
        const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    
        if (SWIPE_RIGHT) {
        setRightSwipe(DEFAULT_COLORS.textGreen)
        }
      };
      const config = {
        velocityThreshold: 0.1,
        directionalOffsetThreshold: 10,
      };
    return(
        <View style={{flex:1,backgroundColor:'#ffffff'}}>
        <Header
        left={155}
        headerText={'Success'}>
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
      <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:Scaling.verticalScale(50)}}>
        <Image source={require('../../../assets/images/celeb.gif')} style={{height:Scaling.verticalScale(200),width:Scaling.horizontalScale(240)}} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: Scaling.verticalScale(15),
        }}>
             <Text
            style={{
              textAlign: 'center',
              fontSize: Scaling.verticalScale(24),
              fontWeight: '600',
              color: DEFAULT_COLORS.textBlack,
              fontFamily: PoppinsBold,
            }}>
            {'Awesome 😎'}
          </Text>
          <Text
            style={{
              textAlign: 'center',
              fontSize: Scaling.verticalScale(14),
              fontWeight: '600',
              marginHorizontal:Scaling.horizontalScale(50),
              color: DEFAULT_COLORS.textColor2,
              fontFamily: PoppinsRegular,
            }}>
            {'The first step has been performed successfully. To go to the next stage, click the button below.'}
          </Text>
       <GestureRecognizer
                onSwipeRight={()=>props.navigation.navigate(SIGNUP_INTRO)}
                onSwipe={(direction, state) => onSwipe(direction, state)}
                config={config}
                style={{
                  height: Scaling.verticalScale(50),
                  flexDirection: 'row',
                  width:Scaling.horizontalScale(382),
                  borderRadius: Scaling.verticalScale(5),
                  alignItems: 'center',
                  justifyContent:'center',
                  backgroundColor:DEFAULT_COLORS.primary,
                  marginTop: Scaling.verticalScale(10),
                }}>
                    <Text style={{
        textAlign: 'center',
        fontSize: Scaling.verticalScale(16),
        fontWeight: '600',
        fontFamily:PoppinsSemiBold,
        color:'#ffffff'
        }}>Continue to Next Step </Text>
        <AntDesign name='arrowright' size={30} color='#ffffff'/>
                
              </GestureRecognizer>
      </View>

        </View>
    )
}