import { View, Text, SafeAreaView, Image, Pressable, Modal, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLOR } from '../contract/color'
import { FONT_SIZE } from '../contract/font_size'

const SettingScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.black }}>
            <View style={{
                flex: 1,
                marginTop: 5,
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
                        source={require('../assets/before.png')}>
                    </Image>
                </TouchableOpacity>
                <Text style={{ fontSize: FONT_SIZE.font_size_20, fontWeight: 600, color: COLOR.white }}>
                    Setting
                </Text>
                <View
                    style={{ width: 30, height: 30 }}
                ></View>
            </View>
            <View style={{
                flex: 9, marginRight: 20,
                marginLeft: 20,
            }}>
                {/**View */}
                <View style={{ width: '100%', height: '7%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <View style={{ width: 30, height: 30, opacity: 0.6, backgroundColor: '#D1784233', borderRadius: 13, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/location-pin.png')}
                            style={{ width: 17, height: 17 }}>
                        </Image>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 700, color: COLOR.white }}>
                            History
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/right-chevron.png')}
                            style={{ width: 23, height: 23 }}>
                        </Image>
                    </View>
                </View>
                <View style={{ width: '100%', height: '7%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <View style={{ width: 30, height: 30, opacity: 0.6, backgroundColor: '#D1784233', borderRadius: 13, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/location-pin.png')}
                            style={{ width: 17, height: 17 }}>
                        </Image>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 700, color: COLOR.white }}>
                            Personal Details
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/right-chevron.png')}
                            style={{ width: 23, height: 23 }}>
                        </Image>
                    </View>
                </View>
                <View style={{ width: '100%', height: '7%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <View style={{ width: 30, height: 30, opacity: 0.6, backgroundColor: '#D1784233', borderRadius: 13, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/location-pin.png')}
                            style={{ width: 17, height: 17 }}>
                        </Image>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 700, color: COLOR.white }}>
                            Address
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/right-chevron.png')}
                            style={{ width: 23, height: 23 }}>
                        </Image>
                    </View>
                </View>
                <View style={{ width: '100%', height: '7%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <View style={{ width: 30, height: 30, opacity: 0.6, backgroundColor: '#D1784233', borderRadius: 13, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/location-pin.png')}
                            style={{ width: 17, height: 17 }}>
                        </Image>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 700, color: COLOR.white }}>
                            Payment Method
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/right-chevron.png')}
                            style={{ width: 23, height: 23 }}>
                        </Image>
                    </View>
                </View>
                <View style={{ width: '100%', height: '7%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <View style={{ width: 30, height: 30, opacity: 0.6, backgroundColor: '#D1784233', borderRadius: 13, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/location-pin.png')}
                            style={{ width: 17, height: 17 }}>
                        </Image>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 700, color: COLOR.white }}>
                            About
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/right-chevron.png')}
                            style={{ width: 23, height: 23 }}>
                        </Image>
                    </View>
                </View>
                <View style={{ width: '100%', height: '7%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <View style={{ width: 30, height: 30, opacity: 0.6, backgroundColor: '#D1784233', borderRadius: 13, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/location-pin.png')}
                            style={{ width: 17, height: 17 }}>
                        </Image>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 700, color: COLOR.white }}>
                            Help
                        </Text>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/right-chevron.png')}
                            style={{ width: 23, height: 23 }}>
                        </Image>
                    </View>
                </View>
                <View style={{ width: '100%', height: '7%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <View style={{ width: 30, height: 30, opacity: 0.6, backgroundColor: '#D1784233', borderRadius: 13, justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/location-pin.png')}
                            style={{ width: 17, height: 17 }}>
                        </Image>
                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 20 }}>
                        <Pressable onPress={
                            () => {
                                setModalVisible(true)
                            }
                        }>
                            <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 700, color: COLOR.white }}>
                                Log out
                            </Text>
                        </Pressable>
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            source={require('../assets/right-chevron.png')}
                            style={{ width: 23, height: 23 }}>
                        </Image>
                    </View>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.gray, marginTop: 0, opacity: 0.9, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: 328, height: 172, borderWidth: 1, borderRadius: 20, backgroundColor: 'black', justifyContent: 'space-around', alignItems: 'center' }}>
                        <Text style={{ alignItems: 'center', fontSize: 16, fontWeight: 600, color: 'white' }}>Are you sure want to logout!</Text>
                        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-evenly' }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '45%' }}>
                                <Text style={{ fontSize: 16, fontWeight: 600, color: 'white' }}>No</Text>
                            </View>
                            <View style={{ width: '55%' }}>
                                <TouchableOpacity
                                    onPress={
                                        () => {
                                            setModalVisible(false)
                                        }
                                    }
                                    style={{
                                        width: 133,
                                        height: 47,
                                        backgroundColor: '#D17842',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        borderRadius: 20
                                    }}>
                                    <Text style={{ fontSize: 16, fontWeight: 600, color: 'white' }}>
                                        Yes
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
            </Modal>
        </SafeAreaView >
    )
}

export default SettingScreen