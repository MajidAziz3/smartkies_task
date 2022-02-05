import React, {useState,useRef} from 'react';
import {View, Text,ScrollView,TouchableOpacity} from 'react-native';
import Header from '../../../components/headers/Header';
import Entypo from 'react-native-vector-icons/Entypo'
import { Scaling } from '../../../helpers/scaling';
import { Poppins, PoppinsBold, PoppinsSemiBold } from '../../../helpers/fontName';
import DEFAULT_COLORS from '../../../helpers/colors';
import { OTP_SCREEN, ROUTE_SIGNIN } from '../../../helpers/RouteName';
import Input from '../../../components/inputs/Input';
import Button from '../../../components/buttons/Button';
import PhoneInput from "react-native-phone-number-input";
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

export const SignUpForm = props => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [sur_name, setSurName] = useState('');
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const phoneInput = useRef(null);
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [showdate, setShowDate] = useState(false);

  var dat = new Date();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setShowDate(true)
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };
  return (
    <View style={{flex: 1}}>
        <Header
        onPress={() => props.navigation.goBack()}
        left={105}
        headerText={'Main Details'}
      >
          <Entypo style={{marginHorizontal:Scaling.horizontalScale(10),marginTop:Scaling.verticalScale(3)}} name='cross' size={25} color={'#828282'} />
     </Header>
     <View style={{marginHorizontal:Scaling.verticalScale(16)}}>
     <Text
        style={{
          fontSize: Scaling.verticalScale(24),
          marginTop: Scaling.verticalScale(30),
          fontWeight: '700',
          color: '#333333',
          fontFamily: PoppinsBold,
        }}>
        Sign Up to Smartkies
      </Text>
      <Text
          style={{
            fontSize: Scaling.verticalScale(14),
            fontWeight: '600',
            color: DEFAULT_COLORS.textColor2,
            fontFamily: PoppinsSemiBold,
            marginBottom: Scaling.verticalScale(10),
          }}>
          Already have an account?{' '}
          <Text
            onPress={() => props.navigation.navigate(ROUTE_SIGNIN)}
            style={{
              color: DEFAULT_COLORS.primary,
            }}>
            Sign in
          </Text>
        </Text>
       
     </View>
     <ScrollView scrollIndicatorInsets={false} style={{marginBottom:Scaling.verticalScale(60),marginHorizontal:Scaling.verticalScale(16)}}>
        <Input
        label={'First Name'}
        required
        value={first_name}
        onChangeText={(text)=>setFirstName(text)}
        placeholder={'Test '}
        />
        <Input
        label={'Last Name'}
        value={last_name}
        onChangeText={(text)=>setLastName(text)}
        placeholder={'Test '}
        />
        <Input
        label={'Sur Name'}
        required
        value={sur_name}
        onChangeText={(text)=>setSurName(text)}
        placeholder={'Test '}
        />
        <Input
        label={'Email Address'}
        required
        value={email}
        onChangeText={(text)=>setEmail(text)}
        placeholder={'Test '}
        />
        <Text
        style={{
          fontSize: Scaling.verticalScale(16),
          fontWeight: '500',
          color: '#333333',
          fontFamily: Poppins,marginTop:Scaling.verticalScale(30)
        }}>
        {'Phone Number'}
        <Text style={{color:'red'}}>*</Text>
      </Text>
        <View style={ {
    lineHeight: 23,
    color: '#000',
    borderWidth: Scaling.verticalScale(2),
    borderColor: '#E5E5E4',
    borderRadius: Scaling.verticalScale(5),
    height: Scaling.verticalScale(56),
    flexDirection: 'row',
    justifyContent: 'space-between',
  }}>
        <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="DM"
            containerStyle={{flex:1}}
            layout="first"
            onChangeText={(text) => {
              setValue(text);
            }}
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
          />
          </View> 
           <Text
        style={{
          fontSize: Scaling.verticalScale(16),
          fontWeight: '500',
          color: '#333333',
          fontFamily: Poppins,marginTop:Scaling.verticalScale(30)
        }}>
        {'Date of Birth'}
        <Text style={{color:'red'}}>*</Text>
      </Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
        <View style={ {
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 23,
    color: '#000',
    borderWidth: Scaling.verticalScale(2),
    borderColor: '#E5E5E4',
    borderRadius: Scaling.verticalScale(5),
    height: Scaling.verticalScale(56),
    flexDirection: 'row',
    justifyContent: 'space-between',
  }}>
       <TouchableOpacity style={{
        paddingLeft: 5,
        paddingRight: 5,
        lineHeight: 23,
        color: '#000'
    }} onPress={showDatepicker}>
  <Text style={{
        fontSize: 18,
        flex: 1,
        marginVertical:3
    }}>{!showdate?'Date of Birth ':`${moment(date).format(
      'yyyy-MM-DD ',
    )}`}</Text>
  </TouchableOpacity >
          </View>
        </ScrollView>
     <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: Scaling.verticalScale(15),
        }}>
        <Button
          onPress={() => props.navigation.navigate(OTP_SCREEN)}
          width={Scaling.horizontalScale(382)}>
          Continue
        </Button>
      </View>
    </View>
  );
};
