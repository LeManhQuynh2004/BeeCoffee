import {
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import React from 'react'
import { FONT_SIZE } from '../contract/font_size'
import { COLOR } from '../contract/color'
import { useState } from 'react'
import KeyboardAvoidingContainer from './KeyboardAvoidingContainer'
import MainScreen from './MainScreen'
import { IsCheckPass, IsCheckEmail } from './validateFrom'

const LoginScreen = ({ navigation }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [email, setEmail] = useState('')
    const [passWord, setPassWord] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passWordError, setPassWordError] = useState('')
    return (
        <KeyboardAvoidingContainer>
            <StatusBar barStyle={'light-content'} />
            <View style={{ flex: 1 }}></View>
            {/**Header */}
            <View style={{
                flex: 3,
                justifyContent: 'space-around',
                alignItems: 'center'
            }}>
                <Image
                    style={{
                        width: 142,
                        height: 142,
                    }}
                    source={
                        require('../assets/logo.png')
                    }>
                </Image>
                <Text style={{
                    fontSize: FONT_SIZE.medium,
                    fontWeight: 700,
                    color: COLOR.white
                }}>
                    Welcome to BeeCoffee !!
                </Text>
                <Text style={{
                    fontSize: FONT_SIZE.font_size_12,
                    fontWeight: 700,
                    color: COLOR.gray
                }}>
                    Login to Continue
                </Text>
            </View>
            {/**Body */}
            <View style={{
                flex: 4,
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>
                    <TextInput
                        onChangeText={
                            (text) => setEmail(text)
                        }
                        keyboardType='email-address'
                        placeholder='Email Address'
                        placeholderTextColor={COLOR.gray}
                        style={{
                            width: '90%',
                            height: 48,
                            borderWidth: 1,
                            borderRadius: 8,
                            borderColor: COLOR.gray,
                            padding: 10,
                            borderColor: emailError === '' ? COLOR.gray : COLOR.errorColor,
                            color: COLOR.white
                        }} />
                    {/**Toast Error Email*/}
                    <Text style={{ textAlign: 'left', width: '90%', fontSize: FONT_SIZE.font_size_12, color: COLOR.errorColor }}>{emailError}</Text>
                    <View style={{
                        width: '100%',
                        alignItems: 'center',
                        position: 'relative'
                    }}>
                        <TextInput
                            onChangeText={
                                (text) => setPassWord(text)
                            }
                            secureTextEntry={isPasswordVisible ? false : true}
                            placeholder='Password'
                            placeholderTextColor='gray'
                            style={
                                {
                                    width: '90%',
                                    height: 48,
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    borderColor: passWordError === '' ? COLOR.gray : COLOR.errorColor,
                                    padding: 10,
                                    color: COLOR.white
                                }
                            }
                        />
                        <TouchableOpacity
                            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                            style={{
                                position: 'absolute',
                                top: 12,
                                right: 30
                            }}
                        >
                            <Text>{isPasswordVisible ? '👁️' : '🔒'}</Text>
                        </TouchableOpacity>
                    </View>
                    {/**Toast Error PassWord */}
                    <Text style={{ textAlign: 'left', width: '90%', fontSize: FONT_SIZE.font_size_12, color: COLOR.errorColor }}>{passWordError}</Text>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'space-evenly',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        onPress={
                            () => {
                                const errorEmail = IsCheckEmail(email)
                                setEmailError(errorEmail)
                                const errorPassWord = IsCheckPass(passWord)
                                setPassWordError(errorPassWord)
                                navigation.navigate('Tag')
                            }
                        }
                        style={{
                            width: '90%',
                            height: 57,
                            borderWidth: 1,
                            borderRadius: 20,
                            backgroundColor: COLOR.mainstream,
                            borderColor: COLOR.mainstream,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={{
                            fontSize: FONT_SIZE.font_size_14,
                            fontWeight: 700,
                            color: COLOR.white
                        }}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            width: '90%',
                            height: 57,
                            borderWidth: 1,
                            borderRadius: 20,
                            backgroundColor: COLOR.white,
                            borderColor: COLOR.white,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={{
                            fontSize: FONT_SIZE.font_size_14,
                            fontWeight: 700,
                            color: COLOR.black
                        }}>
                            Sign in with Google
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                flex: 1.5,
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <Text
                    onPress={
                        () => navigation.navigate('Register')
                    }
                    style={{
                        fontSize: FONT_SIZE.font_size_12,
                        color: COLOR.gray,
                        fontWeight: 700
                    }}>
                    Don’t have account? Click
                    <Text style={{ color: COLOR.black }}>
                        -
                    </Text>
                    <Text style={{
                        color: COLOR.mainstream,
                    }}>
                        Register
                    </Text>
                </Text>
                <Text style={{
                    fontSize: FONT_SIZE.font_size_12,
                    color: COLOR.gray,
                    fontWeight: 700
                }}>
                    Forget Password? Click
                    <Text style={{ color: COLOR.black }}>
                        -
                    </Text>
                    <Text style={{
                        color: COLOR.mainstream,
                    }}>
                        Reset
                    </Text>
                </Text>
            </View>
            <View style={{ flex: 1.5 }}></View>
        </KeyboardAvoidingContainer >
    )
}
export default LoginScreen