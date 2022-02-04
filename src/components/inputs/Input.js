import React, {Children} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Poppins} from '../../helpers/fontName';
import {Scaling} from '../../helpers/scaling';

const Input = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  children,
}) => {
  const {containerStyle, labelStyle, TextinputStyle} = styles;
  return (
    <View style={{marginTop: Scaling.verticalScale(30)}}>
      <Text
        style={{
          fontSize: Scaling.verticalScale(16),
          fontWeight: '500',
          color: '#333333',
          fontFamily: Poppins,
        }}>
        {label}
      </Text>
      <View style={TextinputStyle}>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
        />
        <View
          style={{
            marginHorizontal: Scaling.horizontalScale(10),
            marginVertical: Scaling.verticalScale(5),
          }}>
          {children}
        </View>
      </View>
    </View>
  );
};
const styles = {
  labelStyle: {
    fontSize: 18,
    flex: 1,
    marginVertical: 3,
  },
  TextinputStyle: {
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: 23,
    color: '#000',
    borderWidth: Scaling.verticalScale(2),
    borderColor: '#E5E5E4',
    borderRadius: Scaling.verticalScale(5),
    height: Scaling.verticalScale(45),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerStyle: {
    // flex: 1,
  },
};
export default Input;
