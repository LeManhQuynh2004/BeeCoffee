import {
    View,
    Text,
    ScrollView,
    StatusBar,
    Image,
    KeyboardAvoidingView,
    TextInput,
    FlatList,
    TouchableOpacity,
    SafeAreaView,
    Pressable
} from 'react-native'
import React, { useState } from 'react';
import { COLOR } from '../contract/color';
import { FONT_SIZE } from '../contract/font_size';
import ProductItem from './ProductItem';
import { DATA_PRODUCT, DATA_CATEGORY } from '../contract/dataList';
const MainScreen = ({ navigation }) => {
    const [product, setProduct] = useState(DATA_PRODUCT);
    const [category, setCategory] = useState(DATA_CATEGORY)
    return (
        <KeyboardAvoidingView
            enabled={false}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, padding: 15, backgroundColor: 'black' }}>
                <StatusBar barStyle={'light-content'} />
                <View style={{
                    flex: 0.5,
                    padding: 5,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <TouchableOpacity
                        onPress={
                            () => {
                                navigation.navigate('Setting')
                            }
                        }
                    >
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../assets/menu.png')}
                        ></Image>
                    </TouchableOpacity>
                    <Pressable
                        onPress={
                            () => {
                                console.log('123')
                                navigation.navigate('User')
                            }
                        }>
                        <Image
                            style={{ width: 30, height: 30 }}
                            source={require('../assets/user.png')}
                        ></Image>
                    </Pressable>
                </View>
                <View style={{
                    flex: 1.1,
                    flexDirection: 'row'
                }}>
                    <View style={{ width: '55%', padding: 5 }}>
                        <Text style={{ fontSize: 28, fontWeight: 600, color: COLOR.white }}>
                            Find the best coffee for you
                        </Text>
                    </View>
                    <View style={{ width: '45%' }}>
                    </View>
                </View>
                <View style={{
                    flex: 0.6,
                    padding: 5
                }}>
                    <TextInput
                        placeholder='Find Your Coffee...'
                        placeholderTextColor={'#52555A'}
                        style={{
                            padding: 10,
                            width: '100%', height: '100%',
                            borderWidth: 1, borderRadius: 15,
                            backgroundColor: COLOR.gray, borderColor: COLOR.gray
                        }}>

                    </TextInput>
                </View>
                <View style={{
                    flex: 3.7,
                }}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <FlatList
                            horizontal={true}
                            style={{ flex: 1 }}
                            data={category}
                            keyExtractor={(item) => item.name}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ width: 'auto', height: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginRight: 20 }}>
                                        <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}>
                                            <Text style={{
                                                fontSize: 16,
                                                color: item.status ? COLOR.mainstream : COLOR.gray, fontWeight: '600'
                                            }}>
                                                {item.name}
                                            </Text>
                                            {
                                                item.status == true &&
                                                <View
                                                    style={{
                                                        width: 8,
                                                        height: 8,
                                                        borderRadius: 4,
                                                        backgroundColor: COLOR.mainstream
                                                    }}
                                                ></View>
                                            }
                                        </View>
                                    </View>
                                );
                            }}
                        />
                    </View>
                    <View style={{ flex: 5 }}>
                        <FlatList
                            horizontal={true}
                            style={{ flex: 1 }}
                            data={product}
                            keyExtractor={(item) => item.name}
                            renderItem={({ item }) => <ProductItem item={item} navigation={navigation} />}
                        />
                    </View>
                </View>
                <View style={{
                    flex: 3.7,
                }}>
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 700, color: COLOR.white }}>
                            Coffee beans
                        </Text>
                    </View>
                    <View style={{ flex: 5 }}>
                        <FlatList
                            horizontal={true}
                            style={{ flex: 1 }}
                            data={product}
                            keyExtractor={(item) => item.name}
                            renderItem={({ item }) => <ProductItem item={item} navigation={navigation} />}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView >
    );
}
export default MainScreen