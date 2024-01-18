import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONT_SIZE } from '../contract/font_size'
import { COLOR } from '../contract/color'
import { DATA_ORDER, DATA_PRODUCT } from '../contract/dataList'
import CartItem from './CartItem'

const CartScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.black, padding: 20 }}>
            <View style={{
                width: '100%', height: '7%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
            }}>
                <TouchableOpacity
                    onPress={
                        () => navigation.navigate('Setting')
                    }
                >
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../assets/menu.png')}
                    >
                    </Image>
                </TouchableOpacity>
                <Text style={{ fontSize: FONT_SIZE.font_size_20, fontWeight: 600, color: COLOR.white }}>
                    Cart
                </Text>
                <TouchableOpacity
                    onPress={
                        () => navigation.navigate('User')
                    }
                >
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../assets/user.png')}
                    ></Image>
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', height: '84%' }}>
                <FlatList
                    data={DATA_ORDER}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        if (item.sizeOrder.length === 1) {
                            return (
                                <View style={{ width: '100%', height: 154, backgroundColor: '#444444', borderRadius: 20, marginBottom: 10, flexDirection: 'row' }}>
                                    <View style={{ width: '40%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image
                                            style={{ width: 126, height: 126, borderRadius: 10 }}
                                            source={
                                                {
                                                    uri: item.uri
                                                }
                                            } />
                                    </View>
                                    <View style={{ width: '50%', height: '100%', padding: 10 }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_18, fontWeight: 400 }}>
                                                {item.name}
                                            </Text>
                                            <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_10, fontWeight: 400 }}>
                                                {item.spice}
                                            </Text>
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ width: 72, height: 35, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 500, color: COLOR.white }}>
                                                    {item.sizeOrder[0].size}
                                                </Text>
                                            </View>
                                            <Text style={{ color: COLOR.mainstream, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
                                                $
                                                <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
                                                    {item.price}
                                                </Text>
                                            </Text>
                                        </View>
                                        <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
                                            <TouchableOpacity style={{ backgroundColor: COLOR.mainstream, width: 35, height: 35, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: COLOR.white }}>
                                                    -
                                                </Text>
                                            </TouchableOpacity>
                                            <View style={{ width: 50, height: 35, backgroundColor: COLOR.black, borderRadius: 7, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: COLOR.mainstream }}>
                                                <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: COLOR.white }}>
                                                    {item.sizeOrder[0].quantity}
                                                </Text>
                                            </View>
                                            <TouchableOpacity style={{ backgroundColor: COLOR.mainstream, width: 35, height: 35, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: COLOR.white }}>
                                                    +
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ width: '10%', height: '100%' }}>

                                    </View>
                                </View>
                            );
                        } else {
                            return <CartItem item={item} />;
                        }
                    }}
                />
            </View>
            <View style={{ width: '100%', height: '10%', flexDirection: 'row', alignItems: 'center' }}>
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
                        onPress={
                            () => navigation.navigate('Payment')
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
                            Pay
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CartScreen