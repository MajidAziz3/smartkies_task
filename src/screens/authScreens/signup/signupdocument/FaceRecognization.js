import React, {useRef,useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity,PermissionsAndroid, Platform } from 'react-native';
import {RNCamera,FaceDetector} from 'react-native-camera';
import Entypo from 'react-native-vector-icons/Entypo';
import {Images} from '../../../../assets/images';
import { PoppinsRegular } from '../../../../helpers/fontName';
import {Scaling} from '../../../../helpers/scaling';
import {useDispatch,useSelector} from 'react-redux';
import { setImagesArray } from '../../../../redux/actions/ImageArray';
import { SHOWIMAGES } from '../../../../helpers/RouteName';
import CameraRoll from "@react-native-community/cameraroll";
import {
  Onfido,
  OnfidoCaptureType,
  OnfidoCountryCode,
  OnfidoDocumentType,
} from '@onfido/react-native-sdk';

export const FaceRecognization = props => {
  const {height, width} = Dimensions.get('window');
  const maskRowHeight = Math.round((height - 500) / 20);
  const maskColWidth = (width - 250) / 2;

  const dispatch = useDispatch();
  const state = useSelector(state => state.imageArray.data);
  console.log('tasted',state)
  const cameraRef = useRef(null);
  
  async function hasAndroidPermission() {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
  
    const hasPermission = await PermissionsAndroid.check(permission);
    if (hasPermission) {
      return true;
    }
  
    const status = await PermissionsAndroid.request(permission);
    return status === 'granted';
  }
  
   
 useEffect(()=>{
     hasAndroidPermission()
 },[])
 
  const takePicture = async () => {
      let arr=state
    try {
      const options = {
        maxWidth: 700,
        maxHeight: 700,
        quality: 0.5,
        base64: true,
      };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log('test',data.uri);
      if (Platform.OS === "android" && !(await hasAndroidPermission())) {
        return;
      }
    
      CameraRoll.save(data.uri)
    //   Ca.saveToCameraRoll(data.uri, "photo")
      const fruits = state.concat({uri:data.uri})
      console.log(fruits)
      dispatch(setImagesArray(fruits))
      props.navigation.navigate(SHOWIMAGES)
    } catch (error) {
      console.log(error, 'ERROR <<<<<<<<<<<<<');
    }
  };

  return (
    <View style={{flex: 1}}>
      <RNCamera
        ref={cameraRef}
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
        type={RNCamera.Constants.Type.front}
        
        faceDetectionClassifications={RNCamera.Constants.FaceDetection.Classifications.all}
        faceDetectionLandmarks={RNCamera.Constants.FaceDetection.Landmarks.all}
        // faceDetectionMode={}
        // onFaceDetectionError={(re)=>{
        //     console.log(re)
        // }}
        // faceDetectionMode={RNCamera.Constants.FaceDetection.Mode.accurate}
        onFacesDetected={(re)=>{
            console.log(re)
        }}
        //   flashMode={RNCamera.Constants.FlashMode.torch}
      >
        <View style={styles.maskOutter}>
          <View
            style={[{flex: maskRowHeight}, styles.maskRow, styles.maskFrame]}>
            <Entypo
              name="chevron-left"
              style={{
                marginTop: Scaling.verticalScale(10),
                marginLeft: Scaling.horizontalScale(10),
              }}
              size={30}
            />
          </View>
          <View style={[{flex: 30}, styles.maskCenter]}>
            <View style={[{width: maskColWidth,}, styles.maskFrame]} />
            <View style={styles.maskInner} />
            <View style={[{width: maskColWidth}, styles.maskFrame]} />
          </View>
          <View
            style={[{flex: maskRowHeight}, styles.maskRow, styles.maskFrame]}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    {
                        state.length!=0&&<Images.Back/>
                    }
                <Text
            style={{
              textAlign: 'center',
              fontSize: Scaling.verticalScale(18),
              fontWeight: '600',
              color: '#ffffff',
              fontFamily: PoppinsRegular,
              marginTop:Scaling.verticalScale(12),
              marginBottom:Scaling.verticalScale(40)
            }}>
            {state.length==0?'Front Side':'Back Side'}
          </Text>
          <TouchableOpacity onPress={()=>startSDK()}>
            <Images.CaptureBtn />
            </TouchableOpacity>
            </View>
          </View>
        </View>
      </RNCamera>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraView: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  maskOutter: {
    position: 'absolute',
    height: '100%',
  },
  maskInner: {
    width: Scaling.horizontalScale(360),
    height:Scaling.verticalScale(400),
    backgroundColor: 'transparent',
    borderStyle:'dashed',borderColor:'#ffffff',
    borderWidth: 1,borderRadius:Scaling.verticalScale(150)
  },
  maskFrame: {
    backgroundColor: 'rgba(1,1,1,0.6)',
  },
  maskRow: {
  },
  maskCenter: {flexDirection: 'row',},
});
