import React from 'react'
import {
    Text,
    TouchableOpacity,ActivityIndicator,View
} from 'react-native'
import DEFAULT_COLORS from '../../helpers/colors';
import { PoppinsSemiBold } from '../../helpers/fontName';
import { Scaling } from '../../helpers/scaling';

const Button = ({ onPress, children ,loader,color,width,gray,border}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
        borderRedius: Scaling.verticalScale(5),
        borderColor:DEFAULT_COLORS.primary,
        borderRadius:Scaling.verticalScale(5),
        backgroundColor:color?color:DEFAULT_COLORS.primary,
        height:Scaling.verticalScale(48),
        borderWidth: border?1:0,
        width:width?width:Scaling.horizontalScale(148),
        marginHorizontal: 5,justifyContent:'center',alignItems:'center'
    }
            }>{
                loader?
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator size="small" color="#ffffff"/>
                </View>
                :<Text
                style={{
        textAlign: 'center',
        fontSize: Scaling.verticalScale(16),
        fontWeight: '600',
        fontFamily:PoppinsSemiBold,
        color:color?gray?'#828282':DEFAULT_COLORS.primary: '#ffffff',
    }
                }>
                {
                    children
                }
            </Text>
            }
            
        </TouchableOpacity>
    )
}
export default Button ;