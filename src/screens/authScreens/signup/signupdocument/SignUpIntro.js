import React from 'react';
import {View, Text} from 'react-native';
import {
  Poppins,
  PoppinsBold,
  PoppinsRegular,
  PoppinsSemiBold,
} from '../../../../helpers/fontName';
import {Scaling} from '../../../../helpers/scaling';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import Dash from 'react-native-dash';
import Button from '../../../../components/buttons/Button';
import {INTRODUCATION, VERIFYIDENTITY} from '../../../../helpers/RouteName';
import Header from '../../../../components/headers/Header';
import DEFAULT_COLORS from '../../../../helpers/colors';
import { Images } from '../../../../assets/images';

export const SignupIntro = props => {
  return (
    <View style={{flex: 1}}>
       <Header
        onPress={() => props.navigation.goBack()}
        left={105}
        headerText={'Account Creation'}>
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
          There are only 2 steps left to complete
        </Text>
        <Text
          style={{
            fontSize: Scaling.verticalScale(14),
            fontWeight: '400',
            color: DEFAULT_COLORS.textColor2,
            fontFamily: PoppinsRegular,
          }}>
          Continue to strat the process, it will only take a few minutes.
        </Text>
        <View style={{marginTop: Scaling.verticalScale(40)}}>
          <View
            style={{flexDirection: 'row', height: Scaling.verticalScale(60)}}>
            <View
              style={[
                styles.circle,
                {backgroundColor: DEFAULT_COLORS.textGreen},
              ]}>
              <AntDesign size={30} color="#ffffff" name="user" />
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: Scaling.verticalScale(5),
                }}>
                <Text style={styles.stepText}>STEP 1</Text>
                <Text
                  style={{
                    fontSize: Scaling.verticalScale(12),
                    fontWeight: '500',
                    color: DEFAULT_COLORS.textGreen,
                    fontFamily: Poppins,
                    marginHorizontal: Scaling.horizontalScale(0),
                  }}>
                  Success
                </Text>
              </View>
              <View>
                <Text style={styles.verifiyText}>User Informations</Text>
              </View>
            </View>
          </View>
          <Dash
            dashColor="#5AC168"
            dashLength={4}
            dashGap={4}
            style={{
              width: 1,
              height: 25,
              flexDirection: 'column',
              marginHorizontal: Scaling.horizontalScale(28),
            }}
          />
          <View style={styles.circleContainer}>
            <View
              style={[
                styles.circle,
                {backgroundColor: DEFAULT_COLORS.textColor2},
              ]}>
              <AntDesign size={30} color="#ffffff" name="scan1" />
            </View>
            <View>
              <View
                style={{
                    flexDirection:'row',
                  marginTop: Scaling.verticalScale(5),
                }}>
                <Text style={styles.stepText}>STEP 2</Text>
                <Text
                  style={{
                    fontSize: Scaling.verticalScale(12),
                    fontWeight: '500',
                    color: DEFAULT_COLORS.primary,
                    fontFamily: Poppins,
                    marginHorizontal: Scaling.horizontalScale(0),
                  }}>
                  Pending
                </Text>
              </View>
              <View>
                <Text style={styles.verifiyText}>Verify Identity</Text>
              </View>
            </View>
          </View>
          <View style={{height:Scaling.verticalScale(184),width:Scaling.horizontalScale(382),marginTop:Scaling.verticalScale(30)}}>
          <Text
          style={{
            fontSize: Scaling.verticalScale(14),
            fontWeight: '400',
            color: DEFAULT_COLORS.textColor2,
            fontFamily: PoppinsRegular,
          }}>
          How It will work?
        </Text>
        <Images.VideoImage width='100%' height='100%' />
        <View style={{marginLeft:Scaling.horizontalScale(161),marginTop:Scaling.verticalScale(79),position:'absolute'}}>
                  <Images.PlayIcon/>
        </View>
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
          onPress={() => props.navigation.navigate(VERIFYIDENTITY)}
          width={Scaling.horizontalScale(382)}>
          Continue
        </Button>
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
