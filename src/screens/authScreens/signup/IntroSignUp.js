import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/headers/Header';
import {Scaling} from '../../../helpers/scaling';
import Button from '../../../components/buttons/Button';
import Entypo from 'react-native-vector-icons/Entypo'
import { SIGNUP_FORM } from '../../../helpers/RouteName';
import { OnboardCard } from '../../../components/onboardcard/OnboardCard';
import { Images } from '../../../assets/images';

export const Introducation = props => {
  return (
    <View style={{flex: 1}}>
      <Header
        onPress={() => props.navigation.goBack()}
        left={105}
        headerText={'Introducation'}
      >
          <Entypo style={{marginHorizontal:Scaling.horizontalScale(10),marginTop:Scaling.verticalScale(3)}} name='cross' size={25} color={'#828282'} />
      </Header>
      <OnboardCard intro
          header={'Lorem ipsum dolor sit'}
          Description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet duis eget'
          }>
          <Images.Intro />
        </OnboardCard>
     
      <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',marginBottom:Scaling.verticalScale(15)}}>
            <Button onPress={()=>props.navigation.navigate(SIGNUP_FORM)} width={Scaling.horizontalScale(382)}>Continue</Button>
        </View>
    </View>

  );
};

