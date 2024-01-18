import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import WelComeScreen from './src/WelComeScreen';
import RegisterScreen from './src/RegisterScreen';
import LoginScreen from './src/loginScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from './src/MainScreen';
import { COLOR } from './contract/color';
import MyTag from './src/demo'
import DetailProductScreen from './src/DetailProductScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductItem from './src/ProductItem';
import PersonalDetails from './src/PersonalDetails';
import FavoritesItem from './src/FavoritesItem';
import FavoritesScreen from './src/FavoritesScreen';
import SettingScreen from './src/SettingScreen';
import CartScreen from './src/CartScreen';
import PaymentScreen from './src/PaymentScreen';
import OrderHistoryScreen from './src/OrderHistoryScrreen';
import OrderHistoryItem from './src/OrderHistoryItem';
import OrderItem from './src/OrderHistoryItem';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="Welcome"
            component={WelComeScreen} />
          <Stack.Screen
            name="Login"
            component={LoginScreen} />
          <Stack.Screen name='Register' component={RegisterScreen} />
          <Stack.Screen name="Home" component={MainScreen} />
          <Stack.Screen name="Tag" component={MyTag} />
          <Stack.Screen name="Details" component={DetailProductScreen} />
          <Stack.Screen name="Item" component={ProductItem} />
          <Stack.Screen name="User" component={PersonalDetails} />
          <Stack.Screen name="Setting" component={SettingScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Payment" component={PaymentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App