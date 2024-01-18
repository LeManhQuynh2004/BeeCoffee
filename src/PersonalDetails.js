import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FONT_SIZE } from '../contract/font_size'
import { COLOR } from '../contract/color'
import { IsCheckEmail, IsCheckPass, IsFullName, IsRePassWord } from './validateFrom'
const PersonalDetails = ({ navigation }) => {
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
        <KeyboardAvoidingView
            enabled={false}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.black }}>
                <View style={{
                    flex: 1,
                    marginRight: 20,
                    marginLeft: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        onPress={
                            () => {
                                navigation.goBack()
                            }
                        }
                    >
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../assets/before.png')}
                        >
                        </Image>
                    </TouchableOpacity>
                    <Text style={{ fontSize: FONT_SIZE.font_size_20, fontWeight: 600, color: COLOR.white }}>
                        Setting
                    </Text>
                    <View
                        style={{ width: 30, height: 30 }}
                    ></View>
                </View>
                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={{
                            uri: 'https://leplateau.edu.vn/wp-content/uploads/2023/10/hinh-anh-con-gai-1.jpg'
                        }}
                        style={{ width: 153, height: 153, borderRadius: 5 }}>
                    </Image>
                </View>
                <View style={{ flex: 5, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'column' }}>
                    <View style={{
                        width: '100%',
                        height: '80%',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
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
                    <View style={{ flex: 1, width: '100%', height: '20%', justifyContent: 'center', alignItems: 'center' }}>
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
                    </View>
                </View>
                <View style={{ flex: 1 }}>

                </View>
            </SafeAreaView >
        </KeyboardAvoidingView>
    )
}

export default PersonalDetails