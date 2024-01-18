import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { FONT_SIZE } from '../contract/font_size'
import { COLOR } from '../contract/color'
import { DATA_PRODUCT } from '../contract/dataList'
import FavoritesItem from './FavoritesItem'

const FavoritesScreen = ({ navigation }) => {
    const [product, setProduct] = useState(DATA_PRODUCT);
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.black }}>
            <View style={{ flex: 1, marginLeft: 20, marginRight: 20 }}>
                <View style={{
                    width: '100%', height: '10%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
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
                        Favorites
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
                <View style={{ width: '100%', height: '90%' }}>
                    <FlatList
                        data={product}
                        key={(item) => item.name}
                        renderItem={(item) => <FavoritesItem item={item} />}
                    >
                    </FlatList>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default FavoritesScreen