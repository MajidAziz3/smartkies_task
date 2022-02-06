import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../../../components/headers/Header';
import {Scaling} from '../../../../helpers/scaling';
import Button from '../../../../components/buttons/Button';
import Entypo from 'react-native-vector-icons/Entypo'
import { DOCUMENTSELECTION, FACERECOGNIZATION, SIGNUP_FORM } from '../../../../helpers/RouteName';
import { OnboardCard } from '../../../../components/onboardcard/OnboardCard';
import { Images } from '../../../../assets/images';

export const FaceIdentityIntro = props => {
  return (
    <View style={{flex: 1}}>
      <Header
        onPress={() => props.navigation.goBack()}
        left={105}
        headerText={'Verify Identity'}
      >
          <Entypo style={{marginHorizontal:Scaling.horizontalScale(10),marginTop:Scaling.verticalScale(3)}} name='cross' size={25} color={'#828282'} />
      </Header>
      <OnboardCard intro
          header={'Record a Self Video'}
          Description={
            `We require your live capturing self-video for security purposes. Don't worry, it only takes 20 seconds. Make sure you have a decent location to take the video.`
          }>
          <Images.Selfie />
        </OnboardCard>
     
      <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',marginBottom:Scaling.verticalScale(15)}}>
            <Button onPress={()=>props.navigation.navigate(FACERECOGNIZATION)} width={Scaling.horizontalScale(382)}>Take Now</Button>
        </View>
    </View>

  );
};

