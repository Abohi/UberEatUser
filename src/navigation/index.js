import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from '../screens/HomeScreen';
import RestaurantDetailScreen from '../screens/RestaurantDetailsScreen';
import DishDetailScreen from '../screens/DishDetailScreen';
import BasketScreen from '../screens/Basket';
import OrderScreen from '../screens/OrdersScreen';
import OrderDetails from '../screens/OrderDetails';
const Stack = createNativeStackNavigator();
const RootNavigator = ()=>{
    return (
        <Stack.Navigator initialRouteName="Restuarant">
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Restuarant" component={RestaurantDetailScreen}
            options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
export default RootNavigator;