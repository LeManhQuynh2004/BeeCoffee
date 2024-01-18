import {
    View,
    Text,
    StatusBar,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { useState } from 'react'
import React from 'react'
import { FONT_SIZE } from '../contract/font_size'
import { COLOR } from '../contract/color'
import KeyboardAvoidingContainer from './KeyboardAvoidingContainer'
import { IsCheckEmail, IsCheckPass, IsFullName, IsRePassWord } from './validateFrom'
const RegisterScreen = ({ navigation }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isRePasswordVisible, setIsRePasswordVisible] = useState(false);
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [passWord, setPassWord] = useState('')
    const [RePassWord, setRePassWord] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passWordError, setPassWordError] = useState('')
    const [nameError, setNameError] = useState('')
    const [RepassWordError, setRePassWordError] = useState('')
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
                    Register to Continue
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
                    {/**Input FullName */}
                    <TextInput
                        onChangeText={
                            (text) => {
                                setFullName(text)
                            }
                        }
                        placeholder='Name'
                        placeholderTextColor={COLOR.gray}
                        style={
                            {
                                width: '90%',
                                height: 48,
                                borderWidth: 1,
                                borderRadius: 8,
                                borderColor: nameError === '' ? COLOR.gray : COLOR.errorColor,
                                padding: 10,
                                color: COLOR.white
                            }
                        } />
                    {/**Toast Error Name */}
                    <Text style={{ textAlign: 'left', width: '90%', fontSize: FONT_SIZE.font_size_12, color: COLOR.errorColor }}>{nameError}</Text>
                    {/**Input Email */}
                    <TextInput
                        onChangeText={
                            (text) => {
                                setEmail(text)
                            }
                        }
                        keyboardType='email-address'
                        placeholder='Email Address'
                        placeholderTextColor={COLOR.gray}
                        style={
                            {
                                width: '90%',
                                height: 48,
                                borderWidth: 1,
                                borderRadius: 8,
                                borderColor: emailError === '' ? COLOR.gray : COLOR.errorColor,
                                padding: 10,
                                color: COLOR.white
                            }
                        } />
                    {/**Toast Error Email */}
                    <Text style={{ textAlign: 'left', width: '90%', fontSize: FONT_SIZE.font_size_12, color: COLOR.errorColor }}>{emailError}</Text>
                    {/**PassWord */}
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
                            style={{
                                width: '90%',
                                height: 48,
                                borderWidth: 1,
                                borderRadius: 8,
                                borderColor: passWordError === '' ? COLOR.gray : COLOR.errorColor,
                                padding: 10,
                                color: COLOR.white
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                            style={{
                                position: 'absolute',
                                top: 12,
                                right: 30
                            }}>
                            <Text>{isPasswordVisible ? '👁️' : '🔒'}</Text>
                        </TouchableOpacity>
                    </View>
                    {/**Toast Error PassWord */}
                    <Text style={{ textAlign: 'left', width: '90%', fontSize: FONT_SIZE.font_size_12, color: COLOR.errorColor }}>{passWordError}</Text>
                    <View style={{
                        width: '100%',
                        alignItems: 'center',
                        position: 'relative'
                    }}>
                        <TextInput
                            onChangeText={
                                (text) => setRePassWord(text)
                            }
                            secureTextEntry={isRePasswordVisible ? false : true}
                            placeholder='Re-type PassWord'
                            placeholderTextColor='gray'
                            style={
                                {
                                    width: '90%',
                                    height: 48,
                                    borderWidth: 1,
                                    borderRadius: 8,
                                    borderColor: RepassWordError === '' ? COLOR.gray : COLOR.errorColor,
                                    padding: 10,
                                    color: COLOR.white
                                }
                            }
                        />
                        <TouchableOpacity
                            onPress={() => setIsRePasswordVisible(!isRePasswordVisible)}
                            style={{
                                position: 'absolute',
                                top: 12,
                                right: 30
                            }}
                        >
                            <Text>{isRePasswordVisible ? '👁️' : '🔒'}</Text>
                        </TouchableOpacity>
                    </View>
                    {/**Toast Re_PassWord Name */}
                    <Text style={{ textAlign: 'left', width: '90%', fontSize: FONT_SIZE.font_size_12, color: COLOR.errorColor }}>{RepassWordError}</Text>
                </View>
            </View>
            <View style={{
                flex: 1.5,
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
                <TouchableOpacity
                    onPress={() => {
                        const errorName = IsFullName(fullName)
                        setNameError(errorName)
                        const errorEmail = IsCheckEmail(email)
                        setEmailError(errorEmail)
                        const errorPassWord = IsCheckPass(passWord)
                        setPassWordError(errorPassWord)
                        const errorRePassWord = IsRePassWord(RePassWord, passWord)
                        setRePassWordError(errorRePassWord)
                    }}
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
                        Register
                    </Text>
                </TouchableOpacity>

                <Text
                    onPress={() => navigation.goBack()}
                    style={{
                        fontSize: FONT_SIZE.font_size_12,
                        color: COLOR.gray,
                        fontWeight: 700
                    }}>
                    You have an account? Click
                    <Text style={{ color: COLOR.black }}>
                        -
                    </Text>
                    <Text style={{
                        color: COLOR.mainstream,
                    }}>
                        Sign in
                    </Text>
                </Text>
            </View>
            <View style={{ flex: 1.5 }}></View>
        </KeyboardAvoidingContainer>
    )
}
const styles = StyleSheet.create({
    input: {
        width: '90%',
        height: 48,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: COLOR.gray,
        padding: 10,
        color: COLOR.white
    }
})
export default RegisterScreen