import React from 'react';
import {View, Text} from 'react-native';
import {
  Poppins,
  PoppinsBold,
  PoppinsRegular,
  PoppinsSemiBold,
} from '../../../../helpers/fontName';
import {
  Onfido,
  OnfidoCaptureType,
  OnfidoCountryCode,
  OnfidoDocumentType,
} from '@onfido/react-native-sdk';
import {Scaling} from '../../../../helpers/scaling';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Header from '../../../../components/headers/Header';
import DEFAULT_COLORS from '../../../../helpers/colors';
import { DocumentCard } from '../../../../components/cards/DocumentCard';
import { CAMERASCAN } from '../../../../helpers/RouteName';
import { useSelector } from 'react-redux';

export const DocumentSelection = props => {
  const state=useSelector(state=>state)
  const startSDK=(doctype)=> {
    Onfido.start({
      sdkToken: state.token.data,
      flowSteps: {
        welcome: true,
        captureFace: {
          type: OnfidoCaptureType.PHOTO,
        },
        captureDocument: {
          docType: doctype=='passport'? OnfidoDocumentType.PASSPORT:doctype=='driving_License'? OnfidoDocumentType.DRIVING_LICENSE:doctype=='id'? OnfidoDocumentType.NATIONAL_IDENTITY_CARD:OnfidoDocumentType.RESIDENCE_PERMIT,
          countryCode: OnfidoCountryCode.ARE,
        },
      },
    })
      .then(res =>{ console.log('OnfidoSDK: Success:', JSON.stringify(res))
      var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${state.token.data}`);

var formdata = new FormData();
formdata.append("applicant_id", state.applicantId.data);
formdata.append("report_names", "[document,facial_similarity_photo]");

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.eu.onfido.com/v3/checks", requestOptions)
  .then(response => response.json())
  .then(result => alert(result.Message))
  .catch(error => console.log('error', error));
    })
      .catch(err => console.log('OnfidoSDK: Error:', err.code, err.message));
  }


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
      <View style={{marginHorizontal: Scaling.horizontalScale(16)}}>
        <Text
          style={{
            fontSize: Scaling.verticalScale(24),
            marginTop: Scaling.verticalScale(30),
            fontWeight: '700',
            color: '#333333',
            fontFamily: PoppinsBold,
            width: Scaling.horizontalScale(272),
          }}>
          Select Documents
        </Text>
        <Text
          style={{
            fontSize: Scaling.verticalScale(14),
            fontWeight: '400',
            color: DEFAULT_COLORS.textColor2,
            fontFamily: PoppinsRegular,
          }}>
          Try to upload genuine documents so that you don't face issues when registering an account with us.
        </Text>
        <View style={{marginTop:Scaling.verticalScale(19)}}>
<DocumentCard onPress={()=>startSDK('passport')} text="Passport">
    <Fontisto name={'passport-alt'} size={25} color={'#ffffff'}/>
</DocumentCard>
<DocumentCard onPress={()=>startSDK('drivingLicense')} text="Driving License">
    <FontAwesome name={'drivers-license-o'} size={25} color={'#ffffff'}/>
</DocumentCard>
<DocumentCard onPress={()=>startSDK('id')} text="Identity Card">
    <FontAwesome name={'id-card-o'} size={25} color={'#ffffff'}/>
</DocumentCard>
<DocumentCard onPress={()=>startSDK('residancePermit')} text="Residence Permit">
    <Fontisto name={'home'} size={25} color={'#ffffff'}/>
</DocumentCard>
       </View>
       </View>

    </View>
  );
};

const styles = {
  verifiyText: {
    fontSize: Scaling.verticalScale(16),
    fontWeight: '500',
    color: '#333333',
    fontFamily: Poppins,
    marginHorizontal: Scaling.horizontalScale(20),
  },
  stepText: {
    fontSize: Scaling.verticalScale(12),
    fontWeight: '500',
    color: '#333333',
    fontFamily: PoppinsSemiBold,
    marginHorizontal: Scaling.horizontalScale(20),
  },
  circle: {
    height: Scaling.verticalScale(55),
    width: Scaling.verticalScale(55),
    borderRadius: Scaling.verticalScale(27.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    flexDirection: 'row',
    height: Scaling.verticalScale(60),
    marginTop: Scaling.verticalScale(7),
  },
};
