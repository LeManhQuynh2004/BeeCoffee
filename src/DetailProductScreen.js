import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { FONT_SIZE } from '../contract/font_size'
import { COLOR } from '../contract/color'

const DetailProductScreen = ({ navigation, route }) => {
    const [isFavourite, setFavourite] = useState(false)
    const { item } = route.params
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 2, justifyContent: 'space-between' }}
                source={{
                    uri: item.uri
                }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30, marginRight: 20, marginLeft: 20 }}>
                    <TouchableOpacity
                        onPress={
                            () => {
                                navigation.goBack()
                            }
                        }>
                        <Image style={{ width: 33, height: 33 }} source={require('../assets/before.png')} />
                    </TouchableOpacity>
                    <View style={{ width: 33, height: 33, backgroundColor: COLOR.black, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Pressable
                            onPress={
                                () => {
                                    setFavourite(!isFavourite)
                                }
                            }>
                            {isFavourite && <Image style={{ width: 18, height: 18 }} source={require('../assets/heart.png')} />}
                            {isFavourite == false && <Image style={{ width: 18, height: 18 }} source={require('../assets/broken-heart.png')} />}
                        </Pressable>
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
                                {item.name}
                            </Text>
                            <Text style={{ fontSize: FONT_SIZE.font_size_12, fontWeight: 400, color: COLOR.white }}>
                                {item.spice}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_16 }}>
                                ⭐
                            </Text>
                            <Text style={{ fontSize: FONT_SIZE.font_size_16, color: 'white', fontWeight: 600 }}>
                                {item.star}
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
            <View style={{ flex: 1, backgroundColor: COLOR.black, padding: 15 }}>
                <View style={{ flex: 1.2, justifyContent: 'space-evenly', flexDirection: 'column' }}>
                    <Text style={{ color: COLOR.gray, fontSize: FONT_SIZE.font_size_14, fontWeight: 600 }}>
                        Description
                    </Text>
                    <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_12, fontWeight: 400 }}>
                        Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed!
                    </Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'space-around' }}>
                    <Text style={{ color: COLOR.gray, fontSize: FONT_SIZE.font_size_14, fontWeight: 600 }}>
                        Size
                    </Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <TouchableOpacity style={styles.input}>
                            <Text style={{
                                color: COLOR.gray,
                                fontSize: FONT_SIZE.font_size_12,
                                fontWeight: 500
                            }}>
                                250gm
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.input}>
                            <Text style={{
                                color: COLOR.gray,
                                fontSize: FONT_SIZE.font_size_12,
                                fontWeight: 500
                            }}>
                                500gm
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.input}>
                            <Text style={{
                                color: COLOR.gray,
                                fontSize: FONT_SIZE.font_size_12,
                                fontWeight: 500
                            }}>
                                750gm
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: COLOR.gray, fontSize: FONT_SIZE.font_size_12 }}>
                            Price
                        </Text>
                        <Text style={{ fontSize: 20, color: COLOR.mainstream, fontWeight: 600 }}>
                            $
                            <Text style={{ color: COLOR.white }}>
                                {item.price}
                            </Text>
                        </Text>
                    </View>
                    <View style={{ flex: 3, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            onPress={
                                () => {
                                    console.log(item.name)
                                }
                            }
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
                                Add to Cart
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

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
export default DetailProductScreen