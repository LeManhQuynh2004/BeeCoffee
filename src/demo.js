import * as React from 'react';
import { Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './loginScreen';
import RegisterScreen from './RegisterScreen';
import MainScreen from './MainScreen';
import { COLOR } from '../contract/color';
import DetailProductScreen from './DetailProductScreen';
import PersonalDetails from './PersonalDetails';
import FavoritesScreen from './FavoritesScreen';
import CartScreen from './CartScreen';
import OrderHistoryScreen from './OrderHistoryScrreen';

const Tab = createBottomTabNavigator();

const MyTab = ({ navigation }) => {
    return (
        <NavigationContainer
            theme={{
                dark: true,
                colors: {
                    background: COLOR.gray,
                    card: COLOR.black,
                    text: COLOR.gray,
                },
            }}
            independent={true}>
            <Tab.Navigator
                tabBarOptions={{
                    style: {
                        activeTintColor: COLOR.mainstream,
                    },
                }}
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                }}>
                <Tab.Screen name="HomeScreen">
                    {props => <MainScreen {...props} navigation={navigation} />}
                </Tab.Screen>
                <Tab.Screen name="Cart">
                    {props => <CartScreen {...props} navigation={navigation} />}
                </Tab.Screen>
                <Tab.Screen name="Favorites">
                    {props => <FavoritesScreen {...props} navigation={navigation} />}
                </Tab.Screen>
                <Tab.Screen name="History">
                    {props => <OrderHistoryScreen {...props} navigation={navigation} />}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
};
export default MyTab