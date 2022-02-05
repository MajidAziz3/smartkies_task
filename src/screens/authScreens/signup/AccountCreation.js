import React from 'react';
import {View, Text} from 'react-native';
import Header from '../../../components/headers/Header';
import DEFAULT_COLORS from '../../../helpers/colors';
import {
  Poppins,
  PoppinsBold,
  PoppinsRegular,
  PoppinsSemiBold,
} from '../../../helpers/fontName';
import {Scaling} from '../../../helpers/scaling';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Dash from 'react-native-dash';
import Button from '../../../components/buttons/Button';
import {INTRODUCATION} from '../../../helpers/RouteName';

export const AccountCreation = props => {
  return (
    <View style={{flex: 1}}>
      <Header
        onPress={() => props.navigation.goBack()}
        left={105}
        headerText={'Account Creation'}
      />
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
                {backgroundColor: DEFAULT_COLORS.primary},
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
                    color: DEFAULT_COLORS.primary,
                    fontFamily: Poppins,
                    marginHorizontal: Scaling.horizontalScale(0),
                  }}>
                  Pending
                </Text>
              </View>
              <View>
                <Text style={styles.verifiyText}>User Informations</Text>
              </View>
            </View>
          </View>
          <Dash
            dashColor="#5AC168"
            dashLength={6}
            dashGap={6}
            style={{
              width: 1,
              height: 40,
              flexDirection: 'column',
              marginHorizontal: Scaling.horizontalScale(30),
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
                  marginTop: Scaling.verticalScale(5),
                }}>
                <Text style={styles.stepText}>STEP 2</Text>
              </View>
              <View>
                <Text style={styles.verifiyText}>Verify Identity</Text>
              </View>
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
          onPress={() => props.navigation.navigate(INTRODUCATION)}
          width={Scaling.horizontalScale(382)}>
          Start
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
