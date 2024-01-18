import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { FONT_SIZE } from '../contract/font_size'
import { COLOR } from '../contract/color'
import { DATA_HISTORY } from '../contract/dataList'
import OrderItem from './OrderHistoryItem'
const OrderHistoryScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.black, padding: 20, flexDirection: 'column' }}>
            <View style={{
                width: '100%', height: '7%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
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
                    Order History
                </Text>
                <TouchableOpacity
                    onPress={
                        () => navigation.navigate('User')
                    }
                >
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require('../assets/user.png')}
                    >
                    </Image>
                </TouchableOpacity>
            </View>
            <View style={{ width: '100%', height: '93%', }}>
                <FlatList
                    data={DATA_HISTORY}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <OrderItem item={item} />}
                />
            </View>
        </SafeAreaView>
    )
}

export default OrderHistoryScreen