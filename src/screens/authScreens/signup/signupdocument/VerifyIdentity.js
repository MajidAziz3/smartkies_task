import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../../../components/headers/Header';
import {Scaling} from '../../../../helpers/scaling';
import Button from '../../../../components/buttons/Button';
import Entypo from 'react-native-vector-icons/Entypo'
import { DOCUMENTSELECTION, SIGNUP_FORM } from '../../../../helpers/RouteName';
import { OnboardCard } from '../../../../components/onboardcard/OnboardCard';
import { Images } from '../../../../assets/images';

export const VerifyIdentity = props => {
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
          header={'Scan your Document'}
          Description={
            `We'll require some of your document information for verification, and it'll help us get a better picture of who you are.`
          }>
          <Images.VerifyIdentity />
        </OnboardCard>
     
      <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',marginBottom:Scaling.verticalScale(15)}}>
            <Button onPress={()=>props.navigation.navigate(DOCUMENTSELECTION)} width={Scaling.horizontalScale(382)}>Scan Now</Button>
        </View>
    </View>

  );
};

