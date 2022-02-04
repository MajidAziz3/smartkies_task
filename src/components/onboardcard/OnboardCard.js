import React from "react";
import { Text, View } from "react-native";
import { Images } from "../../assets/images";
import DEFAULT_COLORS from "../../helpers/colors";
import { PoppinsRegular, PoppinsSemiBold } from "../../helpers/fontName";
import { Scaling } from "../../helpers/scaling";

export const OnboardCard=({children,header,Description})=>{
    return(
        <View style={{flex:1,
            height: Scaling.verticalScale(627),alignItems:'center'}}>
        <View style={{
            marginTop:Scaling.verticalScale(23),
            height:Scaling.verticalScale(381),
            width:Scaling.horizontalScale(381),
        }}>
            {children}
        </View>
        <View
          style={{
            marginTop:Scaling.verticalScale(20),
            height: Scaling.verticalScale(68),
            width: Scaling.horizontalScale(341),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: Scaling.verticalScale(24),
              fontWeight: '600',
              color: DEFAULT_COLORS.textBlack,
              fontFamily: PoppinsSemiBold,
            }}>
            {header}
          </Text>
        </View>
        <View
          style={{
            marginTop:Scaling.verticalScale(20),
            height: Scaling.verticalScale(68),
            width: Scaling.horizontalScale(341),
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: Scaling.verticalScale(16),
              fontWeight: '400',
              color: DEFAULT_COLORS.textColor2,
              fontFamily: PoppinsRegular,
            }}>
           {Description}
          </Text>
        </View>
        

        </View>
    )
}