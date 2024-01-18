import {
    View,
    Text,
    Image,
    SafeAreaView,
    StatusBar, TouchableOpacity
} from 'react-native'
import React, { useEffect } from 'react'
import { COLOR } from '../contract/color'
import { FONT_SIZE } from '../contract/font_size'


const WelComeScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 2000);
    })
    return (
        <SafeAreaView style={{ backgroundColor: COLOR.black, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <StatusBar barStyle={'light-content'} />
            <Image
                style={{
                    width: 150,
                    height: 150,
                }}
                source={
                    require('../assets/logo.png')
                }>
            </Image>
        </SafeAreaView>
    )
}
export default WelComeScreen