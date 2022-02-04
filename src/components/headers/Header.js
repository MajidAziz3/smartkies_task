import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Scaling} from '../../helpers/scaling';

const Header = ({onPress, headerText}) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: Scaling.verticalScale(50),
        marginTop:Scaling.verticalScale(10)
      }}>
      <TouchableOpacity onPress={onPress}
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
      <Text style={{}}>{headerText}</Text>
    </View>
  );
};

export default Header;
