import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import { COLOR } from '../contract/color'
import { FONT_SIZE } from '../contract/font_size'
import { DATA_HISTORY, DATA_ORDER } from '../contract/dataList'

const OrderItem = ({ item }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.black }}>
            <View style={{ flex: 1, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: COLOR.white }}>
                        Order Date
                    </Text>
                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 350, color: COLOR.white }}>
                        {item.day} - {item.time}
                    </Text>
                </View>
                <View>
                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: COLOR.white }}>
                        Total Amount
                    </Text>
                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 350, color: COLOR.mainstream, textAlign: 'right' }}>
                        $ {item.totalAmount}
                    </Text>
                </View>
            </View>
            <View style={{ flex: 9 }}>
                <FlatList
                    data={item.orderItem}
                    keyExtractor={(orderItem) => orderItem.id}
                    renderItem={({ item: orderItem }) => (
                        <View style={{ width: '100%', height: 270, borderRadius: 23, backgroundColor: '#444444', padding: 10, flexDirection: 'column', marginBottom: 10 }}>
                            <View style={{ width: '100%', height: '30%', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: '20%', height: '100%', justifyContent: 'center' }}>
                                    <Image
                                        style={{ width: 57, height: 57, borderRadius: 15 }}
                                        source={
                                            {
                                                uri: orderItem.uri
                                            }
                                        }>
                                    </Image>
                                </View>
                                <View style={{ width: '50%', height: '100%', justifyContent: 'space-around' }}>
                                    <View>
                                        <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_18, fontWeight: 400 }}>
                                            {orderItem.name}
                                        </Text>
                                        <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_10, fontWeight: 400 }}>
                                            {orderItem.spice}
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: FONT_SIZE.font_size_20, fontWeight: 600, color: COLOR.mainstream }}>
                                        $
                                        <Text style={{ color: COLOR.white }}>
                                            100
                                        </Text>
                                    </Text>
                                </View>
                            </View>
                            <View style={{ width: '100%', height: '60%' }}>
                                <FlatList
                                    data={orderItem.sizeOrder}
                                    keyExtractor={(itemSize) => itemSize.size.toString()}
                                    renderItem={({ item: itemSize }) => (
                                        <View style={{ width: '100%', height: 45, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <View style={{ flexDirection: 'row', width: '45%', backgroundColor: COLOR.black, borderRadius: 10, justifyContent: 'space-evenly' }}>
                                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 500, color: COLOR.white }}>
                                                        {itemSize.size}
                                                    </Text>
                                                </View>
                                                <View style={{ width: 1, height: '100%', backgroundColor: 'gray' }}>
                                                    <View style={{ backgroundColor: COLOR.gray, width: '100%', height: '100%' }}>

                                                    </View>
                                                </View>
                                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ color: COLOR.mainstream, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
                                                        $
                                                        <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
                                                            {orderItem.price}
                                                        </Text>
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={{ width: '50%', height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: COLOR.mainstream }}>
                                                    X
                                                    <Text style={{ color: COLOR.white }}>
                                                        {itemSize.quantity}
                                                    </Text>
                                                </Text>
                                                <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: COLOR.mainstream }}>
                                                    {itemSize.totalPrice}
                                                </Text>
                                            </View>
                                        </View>
                                    )}>
                                </FlatList>
                            </View >
                        </View >
                    )}>
                </FlatList>
            </View>
        </SafeAreaView>
    )
}
export default OrderItem

// const OrderHistoryItem = ({ item }) => {
//     return (
//         <View style={{ width: '100%', height: 270, borderRadius: 23, backgroundColor: '#444444', padding: 10, flexDirection: 'column', marginBottom: 10 }}>
//             <View style={{ width: '100%', height: '30%', flexDirection: 'row', alignItems: 'center' }}>
//                 <View style={{ width: '20%', height: '100%', justifyContent: 'center' }}>
//                     <Image
//                         style={{ width: 57, height: 57, borderRadius: 15 }}
//                         source={
//                             {
//                                 uri: 'https://thuytinhluminarc.com/wp-content/uploads/2022/08/ly-tach-va-hat-ca-phe.jpg'
//                             }
//                         }>
//                     </Image>
//                 </View>
//                 <View style={{ width: '50%', height: '100%', justifyContent: 'space-around' }}>
//                     <View>
//                         <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_18, fontWeight: 400 }}>
//                             Cappuccino
//                         </Text>
//                         <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_10, fontWeight: 400 }}>
//                             With Steamed Milk
//                         </Text>
//                     </View>
//                 </View>
//                 <View style={{ width: '30%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
//                     <Text style={{ fontSize: FONT_SIZE.font_size_20, fontWeight: 600, color: COLOR.mainstream }}>
//                         $
//                         <Text style={{ color: COLOR.white }}>
//                             37.20
//                         </Text>
//                     </Text>
//                 </View>
//             </View>
//             <View style={{ width: '100%', height: '60%' }}>
//                 <FlatList
//                     data={item.sizeOrder}
//                     keyExtractor={(itemSize) => itemSize.size.toString()}
//                     renderItem={({ item: itemSize }) => (
//                         <View style={{ width: '100%', height: 45, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//                             <View style={{ flexDirection: 'row', width: '45%', backgroundColor: COLOR.black, borderRadius: 10, justifyContent: 'space-evenly' }}>
//                                 <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                                     <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 500, color: COLOR.white }}>
//                                         S
//                                     </Text>
//                                 </View>
//                                 <View style={{ width: 1, height: '100%', backgroundColor: 'gray' }}>
//                                     <View style={{ backgroundColor: COLOR.gray, width: '100%', height: '100%' }}>

//                                     </View>
//                                 </View>
//                                 <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                                     <Text style={{ color: COLOR.mainstream, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
//                                         $
//                                         <Text style={{ color: COLOR.white, fontSize: FONT_SIZE.font_size_16, fontWeight: 600 }}>
//                                             2
//                                         </Text>
//                                     </Text>
//                                 </View>
//                             </View>
//                             <View style={{ width: '50%', height: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
//                                 <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: COLOR.mainstream }}>
//                                     X
//                                     <Text style={{ color: COLOR.white }}>
//                                         2
//                                     </Text>
//                                 </Text>
//                                 <Text style={{ fontSize: FONT_SIZE.font_size_16, fontWeight: 600, color: COLOR.mainstream }}>
//                                     8.40
//                                 </Text>
//                             </View>
//                         </View>
//                     )}>
//                 </FlatList>
//             </View >
//         </View >
//     )
// }

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
