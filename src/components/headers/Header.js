import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import DEFAULT_COLORS from '../../helpers/colors';
import {Poppins} from '../../helpers/fontName';
import {Scaling} from '../../helpers/scaling';

const Header = ({onPress, headerText, left, children}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: headerText
          ? Scaling.verticalScale(58)
          : Scaling.verticalScale(50),
        marginTop: Scaling.verticalScale(10),
        borderBottomColor: headerText && '#E0E0E0',
        borderBottomWidth: Scaling.verticalScale(headerText ? 2 : 0),
      }}>
      {headerText ? (
        <View style={{flex: 0.7, flexDirection: 'row'}}>
         {onPress&& <Entypo
            name="chevron-small-left"
            style={{
              marginLeft: headerText ? Scaling.verticalScale(16) : 0,
            }}
            size={30}
            onPress={onPress}
            color={'#5438FE'}
          />}
          <Text
            style={{
              textAlign: 'center',
              marginLeft: Scaling.horizontalScale(left),
              fontSize: Scaling.verticalScale(16),
              marginTop: Scaling.verticalScale(5),
              fontWeight: '500',
              color: DEFAULT_COLORS.textBlack,
              fontFamily: Poppins,
            }}>
            {headerText}
          </Text>
        </View>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          style={{
            height: Scaling.verticalScale(36),
            width: Scaling.verticalScale(36),
            borderRadius: Scaling.verticalScale(18),
            backgroundColor: '#F1F5FE',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Entypo name="chevron-small-left" size={30} />
        </TouchableOpacity>
      )}
      {children}
    </View>
  );
};

export default Header;
