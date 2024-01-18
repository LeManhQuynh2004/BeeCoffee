import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { COLOR } from '../contract/color'
import { FONT_SIZE } from '../contract/font_size'

const FavoritesItem = (props) => (
    <SafeAreaView style={{
        width: '100%',
        height: 575,
        borderWidth: 1,
        borderColor: '#383A3E',
        borderRadius: 25,
        marginBottom: 20,
        overflow: 'hidden',
    }}>
        <ImageBackground style={{
            flex: 3,
            justifyContent: 'space-between',
            borderRadius: 25,
        }}
            source={{
                uri: 'https://thuytinhocean.net/wp-content/uploads/2023/07/hinh-anh-ly-cafe-capuchino.jpg'
            }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, marginRight: 20, marginLeft: 20 }}>
                <View style={{ width: 33, height: 33 }}>
                </View>
                <View style={{ width: 33, height: 33, backgroundColor: COLOR.black, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: 18, height: 18 }} source={require('../assets/heart.png')} />
                </View>
            </View>
            <View style={{
                width: '100%',
                height: 150,
                backgroundColor: COLOR.transparent,
                borderTopRightRadius: 15,
                borderTopLeftRadius: 15,
                padding: 15,
                flexDirection: 'row'
            }}>
                {/**Left */}
                <View style={{ flex: 2, justifyContent: 'space-around' }}>
                    <View>
                        <Text style={{ fontSize: FONT_SIZE.font_size_20, fontWeight: 600, color: COLOR.white }}>
                            Robusta Beans
                        </Text>
                        <Text style={{ fontSize: FONT_SIZE.font_size_12, fontWeight: 400, color: COLOR.white }}>
                            From Africa
                        </Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16 }}>
                            ⭐
                        </Text>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, color: 'white', fontWeight: 600 }}>
                            4.5
                        </Text>
                    </View>
                </View>
                {/**Right */}
                <View style={{ flex: 1, justifyContent: 'space-around', flexDirection: 'column' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ width: '40%', height: 55, backgroundColor: COLOR.black, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../assets/coffee-bean.png')}>
                            </Image>
                            <Text style={{ fontSize: FONT_SIZE.font_size_10, color: COLOR.gray }}>
                                Bean
                            </Text>
                        </View>
                        <View style={{ width: '40%', height: 55, backgroundColor: COLOR.black, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../assets/location-pin.png')}>
                            </Image>
                            <Text style={{ fontSize: FONT_SIZE.font_size_10, color: COLOR.gray }}>
                                Africa
                            </Text>
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                        <View style={{ width: '100%', height: 45, backgroundColor: COLOR.black, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: COLOR.gray, fontSize: FONT_SIZE.font_size_12 }}>
                                Medium Roasted
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ImageBackground>
        <View style={{ flex: 1, padding: 15 }}>
            <View style={{ flex: 1.2, justifyContent: 'space-evenly', flexDirection: 'column' }}>
                <Text style={{ color: COLOR.gray, fontSize: FONT_SIZE.font_size_14, fontWeight: 600 }}>
                    Description
                </Text>
                <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_12, fontWeight: 400 }}>
                    Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed!
                </Text>
            </View>
        </View>
    </SafeAreaView>
)
const styles = StyleSheet.create({
    input: {
        width: '27%',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#141921',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        color: COLOR.gray,
        fontSize: FONT_SIZE.font_size_12,
    }
})
export default FavoritesItem