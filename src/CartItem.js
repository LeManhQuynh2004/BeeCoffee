import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { COLOR } from '../contract/color'
import { FONT_SIZE } from '../contract/font_size'
import { DATA_ORDER } from '../contract/dataList'

const CartItem = ({ item }) => {
    return (
        <View style={{ width: '100%', height: 270, borderRadius: 23, backgroundColor: '#444444', padding: 10, flexDirection: 'column', marginBottom: 10 }}>
            <View style={{ width: '100%', height: '40%', flexDirection: 'row' }}>
                <View style={{ width: '33%', height: '100%', justifyContent: 'center' }}>
                    <Image
                        style={{ width: 100, height: 100, borderRadius: 15 }}
                        source={
                            {
                                uri: item.uri
                            }
                        }>
                    </Image>
                </View>
                <View style={{ width: '38%', height: '100%', justifyContent: 'space-around' }}>
                    <View>
                        <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_18, fontWeight: 400 }}>
                            {item.name}
                        </Text>
                        <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_10, fontWeight: 400 }}>
                            {item.spice}
                        </Text>
                    </View>
                    <View style={{ width: '90%', height: 45, backgroundColor: '#141921', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: COLOR.gray, fontSize: FONT_SIZE.font_size_12 }}>
                            Medium Roasted
                        </Text>
                    </View>
                </View>
                <View style={{ width: '30%', height: '100%' }}>

                </View>
            </View>
            <View style={{ width: '100%', height: '60%' }}>
                <FlatList
                    data={item.sizeOrder}
                    keyExtractor={(itemSize) => itemSize.size.toString()}
                    renderItem={({ item: itemSize }) => (
                        <View style={{ width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ width: 72, height: 35, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 500, color: COLOR.white }}>
                                    {itemSize.size}
                                </Text>
                            </View>
                            <Text style={{ color: COLOR.mainstream, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
                                $
                                <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
                                    {item.price * itemSize.quantity}
                                </Text>
                            </Text>

                            <TouchableOpacity style={{ backgroundColor: COLOR.mainstream, width: 35, height: 35, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: COLOR.white }}>
                                    -
                                </Text>
                            </TouchableOpacity>
                            <View style={{ width: 50, height: 35, backgroundColor: COLOR.black, borderRadius: 7, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: COLOR.mainstream }}>
                                <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: COLOR.white }}>
                                    {itemSize.quantity}
                                </Text>
                            </View>
                            <TouchableOpacity style={{ backgroundColor: COLOR.mainstream, width: 35, height: 35, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: COLOR.white }}>
                                    +
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}>
                </FlatList>
            </View >
        </View >
    )
}

export default CartItem

/**
 * <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ width: 72, height: 35, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 500, color: COLOR.white }}>
                                L
                            </Text>
                        </View>
                        <Text style={{ color: COLOR.mainstream, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
                            $
                            <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
                                4.20
                            </Text>
                        </Text>

                        <TouchableOpacity style={{ backgroundColor: COLOR.mainstream, width: 35, height: 35, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: COLOR.white }}>
                                -
                            </Text>
                        </TouchableOpacity>
                        <View style={{ width: 50, height: 35, backgroundColor: COLOR.black, borderRadius: 7, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: COLOR.mainstream }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: COLOR.white }}>
                                1
                            </Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: COLOR.mainstream, width: 35, height: 35, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: COLOR.white }}>
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ width: 72, height: 35, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 500, color: COLOR.white }}>
                                L
                            </Text>
                        </View>
                        <Text style={{ color: COLOR.mainstream, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
                            $
                            <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
                                4.20
                            </Text>
                        </Text>

                        <TouchableOpacity style={{ backgroundColor: COLOR.mainstream, width: 35, height: 35, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: COLOR.white }}>
                                -
                            </Text>
                        </TouchableOpacity>
                        <View style={{ width: 50, height: 35, backgroundColor: COLOR.black, borderRadius: 7, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: COLOR.mainstream }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: COLOR.white }}>
                                1
                            </Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: COLOR.mainstream, width: 35, height: 35, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: COLOR.white }}>
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ width: 72, height: 35, backgroundColor: 'black', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 500, color: COLOR.white }}>
                                L
                            </Text>
                        </View>
                        <Text style={{ color: COLOR.mainstream, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
                            $
                            <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
                                4.20
                            </Text>
                        </Text>

                        <TouchableOpacity style={{ backgroundColor: COLOR.mainstream, width: 35, height: 35, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: COLOR.white }}>
                                -
                            </Text>
                        </TouchableOpacity>
                        <View style={{ width: 50, height: 35, backgroundColor: COLOR.black, borderRadius: 7, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: COLOR.mainstream }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: COLOR.white }}>
                                1
                            </Text>
                        </View>
                        <TouchableOpacity style={{ backgroundColor: COLOR.mainstream, width: 35, height: 35, borderRadius: 7, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: FONT_SIZE.font_size_18, fontWeight: 700, color: COLOR.white }}>
                                +
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
 */
