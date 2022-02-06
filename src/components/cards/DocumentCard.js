import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import DEFAULT_COLORS from '../../helpers/colors';
import {Scaling} from '../../helpers/scaling';
import Entypo from 'react-native-vector-icons/Entypo'
import { Poppins } from '../../helpers/fontName';

export const DocumentCard = ({children, text, onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={{
        height: Scaling.verticalScale(85),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: DEFAULT_COLORS.textColor,
        borderBottomWidth: 1,
      }}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
      <View
        style={{
          height: Scaling.verticalScale(55),
          width: Scaling.horizontalScale(55),
          borderRadius: Scaling.verticalScale(11),
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:DEFAULT_COLORS.primary
        }}>
            {children}
        </View>
        <Text
          style={{
            fontSize: Scaling.verticalScale(16),
            fontWeight: '600',
            color: DEFAULT_COLORS.textColor2,
            fontFamily: Poppins,
            textAlign:'center',marginHorizontal:Scaling.horizontalScale(16)
          }}>
          {text}
        </Text>
        </View>
      <Entypo name='chevron-with-circle-right' size={20} />
    </TouchableOpacity>
  );
};
