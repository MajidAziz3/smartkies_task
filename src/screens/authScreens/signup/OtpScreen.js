import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Header from '../../../components/headers/Header';
import Entypo from 'react-native-vector-icons/Entypo';
import {Scaling} from '../../../helpers/scaling';
import {Poppins, PoppinsBold, PoppinsSemiBold} from '../../../helpers/fontName';
import DEFAULT_COLORS from '../../../helpers/colors';
import Button from '../../../components/buttons/Button';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { PASSWORD } from '../../../helpers/RouteName';

const styles = StyleSheet.create({
  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20},
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    marginHorizontal:10
  },
  focusCell: {
    borderColor: '#000',
  },
});

const CELL_COUNT = 4;
export const OtpScreen = props => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [propss, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View style={{flex: 1}}>
      <Header
        onPress={() => props.navigation.goBack()}
        left={105}
        headerText={'Verify OTP'}>
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
          Verify your Phone Number
        </Text>
        <Text
          style={{
            fontSize: Scaling.verticalScale(14),
            fontWeight: '400',
            color: DEFAULT_COLORS.textColor2,
            fontFamily: PoppinsSemiBold,
            marginBottom: Scaling.verticalScale(10),
          }}>
          Enter the verification code below.
        </Text>
        <Text
          style={{
            fontSize: Scaling.verticalScale(16),
            fontWeight: '500',
            color: DEFAULT_COLORS.textColor2,
            textAlign:'center',
            marginHorizontal:Scaling.horizontalScale(35),
            fontFamily: Poppins,
            marginBottom: Scaling.verticalScale(10),
            marginTop:Scaling.verticalScale(67)
          }}>
          We send the verification code to +971 55 555 5555 <Text style={{color:DEFAULT_COLORS.primary}}>Change</Text>
        </Text>
      </View>

      <View
        style={{
          flex:0.6,
          justifyContent: 'center',
          alignItems: 'center',
        }}>

        <CodeField
          ref={ref}
          {...propss}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          cellCount={CELL_COUNT}
          rootStyle={styles.codeFieldRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
        <Text
          style={{
            fontSize: Scaling.verticalScale(16),
            fontWeight: '500',
            color: DEFAULT_COLORS.textColor2,
            textAlign:'center',
            marginHorizontal:Scaling.horizontalScale(35),
            fontFamily: Poppins,
            marginBottom: Scaling.verticalScale(10),
            marginTop:Scaling.verticalScale(30)
          }}>Didn’t get the code?
           <Text style={{color:DEFAULT_COLORS.primary}}>Resend</Text>
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: Scaling.verticalScale(15),
        }}>
        <Button
          onPress={() => props.navigation.navigate(PASSWORD)}
          width={Scaling.horizontalScale(382)}>
          Continue
        </Button>
      </View>
    </View>
  );
};
