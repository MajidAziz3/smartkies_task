import React from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../../../components/headers/Header';
import {Scaling} from '../../../../helpers/scaling';
import Button from '../../../../components/buttons/Button';
import Entypo from 'react-native-vector-icons/Entypo';
import {DOCUMENTSELECTION, FACEIDENTITYINTRO, SIGNUP_FORM} from '../../../../helpers/RouteName';
import DEFAULT_COLORS from '../../../../helpers/colors';
import {PoppinsBold} from '../../../../helpers/fontName';
import {useDispatch, useSelector} from 'react-redux';
import { setImagesArray } from '../../../../redux/actions/ImageArray';

export const ShowImages = props => {
  const state = useSelector(state => state.imageArray.data);
  console.log(state);
  const dispatch=useDispatch()
  return (
    <View style={{flex: 1}}>
      <Header
        onPress={() => props.navigation.goBack()}
        left={105}
        headerText={'Verify Identity'}>
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
      <Text
        style={{
          textAlign: 'center',
          fontSize: Scaling.verticalScale(24),
          fontWeight: '600',
          color: DEFAULT_COLORS.textBlack,
          fontFamily: PoppinsBold,
          marginTop: Scaling.verticalScale(108),
        }}>
        {state.length==1?'Front View':'Back View'}
      </Text>
      <View style={{marginHorizontal: Scaling.horizontalScale(30)}}>
        <Image
          style={{
            height: Scaling.verticalScale(207),
            borderRadius: Scaling.verticalScale(30),
            marginTop:Scaling.verticalScale(10)
          }}
          source={{uri: state[state.length - 1].uri}}
        />
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: Scaling.verticalScale(14),
          fontWeight: '600',
          color: DEFAULT_COLORS.textColor,
          fontFamily: PoppinsBold,
          marginTop: Scaling.verticalScale(20),
          marginHorizontal:Scaling.horizontalScale(50)
        }}>
        {'Make sure that all of the text in this image is viewable.'}
      </Text>

      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: Scaling.verticalScale(15),
        }}>
        <Button
          onPress={() =>{
              if(state.length==1){
                  props.navigation.goBack()
              }
              else{
                  props.navigation.navigate(FACEIDENTITYINTRO)
              }
          }}
          width={Scaling.horizontalScale(382)}>
          Looking Perfect
        </Button>
        <View style={{height: 20}} />
        <Button
          onPress={() => {
              if(state.length==1){  
      dispatch(setImagesArray([]))
              }
              else{
                  dispatch(setImagesArray([state[state.length-1]]))
              }
              props.navigation.goBack()
          }}
          color="#ffffff"
          border
          width={Scaling.horizontalScale(382)}>
          Retake
        </Button>
      </View>
    </View>
  );
};
