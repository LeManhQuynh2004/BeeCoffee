import { View, Text, Image, TouchableOpacity, Pressable, } from 'react-native'
import React from 'react'
import { FONT_SIZE } from '../contract/font_size';
import { COLOR } from '../contract/color';
const ProductItem = ({ item, navigation }) => (
    <Pressable
        onPress={
            () => {
                navigation.navigate('Details', { item })
            }
        }
    >
        <View style={{ width: 155, height: '97%', backgroundColor: '#262B33', borderRadius: 23, padding: 15, marginRight: 10 }}>
            <View style={{ width: '100%', height: '60%', justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={
                        {
                            uri: item.uri
                        }
                    }
                    style={{ position: 'relative', width: 126, height: 126, borderRadius: 23 }}
                >
                </Image>
                <View style={{ width: 60, height: 27, padding: 4, borderBottomLeftRadius: 23, borderTopRightRadius: 23, justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center', backgroundColor: COLOR.transparent, margin: 1, position: 'absolute', top: -5, right: -2 }}>
                    <Text style={{ fontSize: 12 }}>
                        ⭐
                    </Text>
                    <Text style={{ fontSize: 12, color: 'white', fontWeight: 600 }}>
                        {item.star}
                    </Text>
                </View>
            </View>
            <View style={{ width: '100%', height: '60%', flex: 1, justifyContent: 'space-around' }}>
                <Text style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>
                    {item.name}
                </Text>
                <Text style={{ fontSize: 12, fontWeight: 400, color: 'white' }}>
                    {item.spice}
                </Text>
                <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontSize: 15, color: 'white', fontWeight: 600 }}>
                        <Text style={{ color: COLOR.mainstream }}>
                            $
                        </Text>
                        <Text style={{ color: '#262B33' }}>
                            -
                        </Text>
                        {item.price}
                    </Text>
                    <TouchableOpacity style={{
                        width: 29,
                        height: 29,
                        backgroundColor: COLOR.mainstream,
                        borderRadius: 7, justifyContent: 'center'
                        , alignItems: 'center'
                    }}>
                        <Text style={{ color: 'white', fontSize: 18 }}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Pressable>
);

export default ProductItem