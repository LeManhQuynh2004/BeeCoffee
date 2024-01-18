import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLOR } from '../contract/color'
import { FONT_SIZE } from '../contract/font_size'

const PaymentScreen = ({ navigation }) => {
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
                        () => navigation.goBack()
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
            <View style={{ flex: 3, padding: 20, alignItems: 'center' }}>
                {/**Cart */}
                <View style={{ width: '100%', height: 241, borderRadius: 25, borderWidth: 2, borderColor: COLOR.mainstream, padding: 10, justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: FONT_SIZE.font_size_14, color: COLOR.white }}>
                        Credit Card
                    </Text>
                    <View style={{ width: '100%', borderRadius: 15, height: 186, backgroundColor: '#262B33', padding: 10, justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Image
                                style={{ width: 31, height: 24 }}
                                source={require('../assets/chip.png')}>
                            </Image>
                            <Image
                                style={{ width: 31, height: 24 }}
                                source={require('../assets/visa.png')}
                            ></Image>
                        </View>
                        <Text style={{ fontSize: FONT_SIZE.font_size_14, color: COLOR.white, fontWeight: 600, letterSpacing: 7 }}>
                            3897 8923 6745 4638
                        </Text>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontSize: FONT_SIZE.font_size_10, color: COLOR.white }}>
                                    Card Holder Name
                                </Text>
                                <Text style={{ fontSize: FONT_SIZE.font_size_16, color: COLOR.white }}>
                                    Robert Evans
                                </Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: FONT_SIZE.font_size_10, color: COLOR.white }}>
                                    Expiry Date
                                </Text>
                                <Text style={{ fontSize: FONT_SIZE.font_size_16, color: COLOR.white }}>
                                    02/30
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flex: 5, marginLeft: 20, marginRight: 20 }}>
                <View style={{ width: '100%', height: 50, marginBottom: 7, backgroundColor: '#262B33', flexDirection: 'row', borderRadius: 25, borderWidth: 1, borderColor: COLOR.gray }}>
                    <View style={{ width: '15%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            resizeMode='contain'
                            style={{ width: 25, height: 25 }}
                            source={
                                require('../assets/Wallet.png')
                            }>
                        </Image>
                    </View>
                    <View style={{ width: '60%', height: '100%', justifyContent: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_14, fontWeight: 600, color: COLOR.white }}>
                            Wallet
                        </Text>
                    </View>
                    <View style={{ width: '25%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: 400, color: COLOR.white, fontSize: FONT_SIZE.font_size_14 }}>
                            $ 100.50
                        </Text>
                    </View>
                </View>
                <View style={{ width: '100%', height: 50, marginBottom: 7, backgroundColor: '#262B33', flexDirection: 'row', borderRadius: 25, borderWidth: 1, borderColor: COLOR.gray }}>
                    <View style={{ width: '15%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            resizeMode='contain'
                            style={{ width: 25, height: 25 }}
                            source={
                                require('../assets/google_pay.png')
                            }>
                        </Image>
                    </View>
                    <View style={{ width: '85%', height: '100%', justifyContent: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_14, fontWeight: 600, color: COLOR.white }}>
                            Google Pay
                        </Text>
                    </View>
                </View>
                <View style={{ width: '100%', height: 50, marginBottom: 7, backgroundColor: '#262B33', flexDirection: 'row', borderRadius: 25, borderWidth: 1, borderColor: COLOR.gray }}>
                    <View style={{ width: '15%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            resizeMode='contain'
                            style={{ width: 25, height: 25 }}
                            source={
                                require('../assets/Vector.png')
                            }>
                        </Image>
                    </View>
                    <View style={{ width: '85%', height: '100%', justifyContent: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_14, fontWeight: 600, color: COLOR.white }}>
                            Apple Pay
                        </Text>
                    </View>
                </View>
                <View style={{ width: '100%', height: 50, marginBottom: 7, backgroundColor: '#262B33', flexDirection: 'row', borderRadius: 25, borderWidth: 1, borderColor: COLOR.gray }}>
                    <View style={{ width: '15%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            resizeMode='contain'
                            style={{ width: 25, height: 25 }}
                            source={
                                require('../assets/Group.png')
                            }>
                        </Image>
                    </View>
                    <View style={{ width: '85%', height: '100%', justifyContent: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_14, fontWeight: 600, color: COLOR.white }}>
                            Amazon Pay
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: COLOR.gray, fontSize: FONT_SIZE.font_size_12 }}>
                        Price
                    </Text>
                    <Text style={{ fontSize: 20, color: COLOR.mainstream, fontWeight: 600 }}>
                        $
                        <Text style={{ color: COLOR.white }}>
                            100
                        </Text>
                    </Text>
                </View>
                <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            width: '90%',
                            height: '75%',
                            borderRadius: 20,
                            backgroundColor: COLOR.mainstream,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Text style={{
                            color: COLOR.white,
                            fontSize: FONT_SIZE.font_size_16,
                            fontWeight: 600
                        }}>
                            Pay from Credit Card
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default PaymentScreen