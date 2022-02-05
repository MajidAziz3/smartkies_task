import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../../components/headers/Header';
import {Scaling} from '../../../helpers/scaling';
import {Picker} from '@react-native-picker/picker';
import Button from '../../../components/buttons/Button';
import {Poppins, PoppinsBold, PoppinsSemiBold} from '../../../helpers/fontName';
import DEFAULT_COLORS from '../../../helpers/colors';
import Pickers from '../../../components/picker/Pickers';
import Input from '../../../components/inputs/Input';
import { UserTaste } from './UserTaste';
import { USERTASTE } from '../../../helpers/RouteName';

export const Information = props => {
  const [selectedCountry, setSelectedCountry] = useState('choose you country');
  const [martialStatus, setMartialStatus] = useState('choose your status');
  return (
    <View style={{flex: 1}}>
      <Header
        onPress={() => props.navigation.goBack()}
        left={105}
        headerText={'Information'}>
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
          Your Information Data
        </Text>
        <Text
          style={{
            fontSize: Scaling.verticalScale(14),
            fontWeight: '400',
            color: DEFAULT_COLORS.textColor2,
            fontFamily: PoppinsSemiBold,
            marginBottom: Scaling.verticalScale(10),
          }}>
          We'd like to learn more about you as a key user in our application.
        </Text>
        <View style={{marginTop: Scaling.verticalScale(20)}}>
      <Text
        style={{
          fontSize: Scaling.verticalScale(16),
          fontWeight: '500',
          color: '#333333',
          fontFamily: Poppins,
        }}>
        {'Country of Resident'}
      </Text>
     
          <Picker
            selectedValue={selectedCountry}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedCountry(itemValue)
            }>
            <Picker.Item label="choose your country" value="choose your country" />
            <Picker.Item label="UAE" value="UAE" />
            <Picker.Item label="Pakistan" value="pakistan" />
          </Picker>
        </View>
        <Input label={'Living Location'} placeholder={'Living Location'}>
            <Entypo name='location-pin' size={20}  color='#5438FE' />
        </Input>
        <Text
          style={{
            fontSize: Scaling.verticalScale(12),
            fontWeight: '400',
            color: DEFAULT_COLORS.textColor,
            fontFamily: Poppins,
          }}>
         This will help others to find you for the service
        </Text>
        <View style={{marginTop: Scaling.verticalScale(20)}}>
      <Text
        style={{
          fontSize: Scaling.verticalScale(16),
          fontWeight: '500',
          color: '#333333',
          fontFamily: Poppins,
        }}>
        {'Marital Status'}
      </Text>
     
          <Picker
            selectedValue={martialStatus}
            onValueChange={(itemValue, itemIndex) =>
              setMartialStatus(itemValue)
            }>
            <Picker.Item label="choose your status" value="choose your status" />
            <Picker.Item label="married" value="married" />
            <Picker.Item label="single" value="single" />
          </Picker>
          <Text
          style={{
            fontSize: Scaling.verticalScale(16),
            marginTop:Scaling.verticalScale(20),
            fontWeight: '400',
            color: DEFAULT_COLORS.textColor,
            fontFamily: Poppins,
          }}>
         Do you want to receive all of your updates to your registered mobile as SMS.
        </Text>
        </View>
        <View style={{flexDirection:'row',marginTop:Scaling.verticalScale(20)}}>
          <Button gray width={Scaling.horizontalScale(94)} color='#F1F5FE'>Sure</Button> 
          <View style={{marginHorizontal:Scaling.horizontalScale(20)}}>
          <Button gray width={Scaling.horizontalScale(94)} color='#F1F5FE'>Not Now</Button>
          </View>
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
          onPress={() => props.navigation.navigate(USERTASTE)}
          width={Scaling.horizontalScale(382)}>
          Continue
        </Button>
      </View>
    </View>
  );
};
