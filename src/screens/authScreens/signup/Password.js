import React,{useState} from "react";
import { View,Text } from "react-native";
import Header from "../../../components/headers/Header";
import { Scaling } from "../../../helpers/scaling";
import Entypo from 'react-native-vector-icons/Entypo'
import { Poppins, PoppinsBold, PoppinsRegular, PoppinsSemiBold } from "../../../helpers/fontName";
import DEFAULT_COLORS from "../../../helpers/colors";
import Input from "../../../components/inputs/Input";
import Button from "../../../components/buttons/Button";
import CheckBox from '@react-native-community/checkbox';
import { VERIFYMAIL } from "../../../helpers/RouteName";
import {GetToken, Signup} from '../../../services/ApiManager'
import {useDispatch,useSelector} from 'react-redux';
import { setApplicantId } from "../../../redux/actions/ApplicantId";
import { setOnfidoId } from "../../../redux/actions/OnfidoApplicantId";
import { setToken } from "../../../redux/actions/TOken";

export const Password=(props)=>{
    const [password, setPassword] = useState('');
    const [passwordShow,setPasswordShow]=useState(true)
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [loader,setLoader]=useState(false)
    const dispatch=useDispatch()
    const [toggleCheckBox1, setToggleCheckBox1] = useState(true);
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
    console.log(props.route.params)
    const register=async()=>{
      setLoader(true)
      let body={
        "first_name": props.route.params.first_name,
        "last_name": props.route.params.last_name,
        "email": props.route.params.email,
        "passwrod": password,
        "password_confirmation": passwordConfirmation,
        "date_of_birth": props.route.params.date_of_birth,
        "phone_number": props.route.params.phone_number,
        "gender": "male",
        "country_id": "1"
      }
      await Signup(body).then((response) => response.json()).then(async text =>{
        dispatch(setApplicantId(text.data.id))
        dispatch(setOnfidoId(text.data.onfido_applicant_id))
        props.navigation.navigate(VERIFYMAIL)
        await GetToken(`users/${text.data.id}/generate_sdk`).then((response) => response.json()).then(async text =>dispatch(setToken(text.data.sdk_token))).catch(err=>console.log(err))
        setLoader(false)
      }).catch(err=>console.log(err))
    }
    return(
        <View style={{flex:1}}>
<Header
        onPress={() => props.navigation.goBack()}
        left={105}
        headerText={'Password'}>
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
            marginTop: Scaling.verticalScale(30),
            fontWeight: '700',
            color: '#333333',
            fontFamily: PoppinsBold,
          }}>
          Create Your Password
        </Text>
        <Text
          style={{
            fontSize: Scaling.verticalScale(14),
            fontWeight: '400',
            color: DEFAULT_COLORS.textColor2,
            fontFamily: PoppinsSemiBold,
            marginBottom: Scaling.verticalScale(10),
          }}>
          You can change your password at any time.
        </Text>
        <View style={{marginVertical:Scaling.verticalScale(16)}}>
        <Input
          placeholder={'*** *** **'}
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={passwordShow}
          label={'Password'}>
          <Entypo
            onPress={() => setPasswordShow(!passwordShow)}
            name={passwordShow ? 'eye' : 'eye-with-line'}
            size={30}
          />
        </Input>
        <Text
          style={{
            fontSize: Scaling.verticalScale(12),
            fontWeight: '400',
            color: DEFAULT_COLORS.textColor2,
            fontFamily: Poppins,
          }}>
         Must be atlest 8 characters
        </Text>
        <Input
          placeholder={'*** *** **'}
          value={passwordConfirmation}
          onChangeText={text => setPasswordConfirmation(text)}
          secureTextEntry={passwordShow}
          label={'Confirm Password'}/>
          <Text
          style={{
            fontSize: Scaling.verticalScale(12),
            fontWeight: '400',
            color: DEFAULT_COLORS.textColor2,
            fontFamily: Poppins,
          }}>
         Both password must be match
        </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox1}
            onValueChange={newValue => setToggleCheckBox1(newValue)}
          />
          <Text
            style={{
              fontSize: Scaling.verticalScale(12),
              marginTop: Scaling.verticalScale(7),
              fontWeight: '400',
              color: '#333333',
              fontFamily: PoppinsRegular,
            }}>
            Min 8 Characters
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox2}
            onValueChange={newValue => setToggleCheckBox2(newValue)}
          />
          <Text
            style={{
              fontSize: Scaling.verticalScale(12),
              marginTop: Scaling.verticalScale(7),
              fontWeight: '400',
              color: '#333333',
              fontFamily: PoppinsRegular,
            }}>
            1 Letter
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox3}
            onValueChange={newValue => setToggleCheckBox3(newValue)}
          />
          <Text
            style={{
              fontSize: Scaling.verticalScale(12),
              marginTop: Scaling.verticalScale(7),
              fontWeight: '400',
              color: '#333333',
              fontFamily: PoppinsRegular,
            }}>
            i number
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
             <View style={{flexDirection: 'row',marginHorizontal:Scaling.horizontalScale(16),height:Scaling.verticalScale(40),width:Scaling.horizontalScale(380)}}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
          <Text
            style={{
              fontSize: Scaling.verticalScale(12),
              marginTop: Scaling.verticalScale(8),
              fontWeight: '400',
              color: '#333333',
              fontFamily: PoppinsRegular,
              textAlign:'center'
            }}>
            You agree to Smartkies' <Text style={{color:DEFAULT_COLORS.primary}}>Privacy</Text> & <Text style={{color:DEFAULT_COLORS.primary}}>Policy</Text> by clicking here.
          </Text>
        </View>
        <Button
        loader={loader}
          onPress={() =>register()} // props.navigation.navigate(VERIFYMAIL)
          width={Scaling.horizontalScale(382)}>
          Continue
        </Button>
      </View>
        </View>
    )
}

