import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailsScreen';
import DishDetailScreen from './src/screens/DishDetailScreen';
import BasketScreen from './src/screens/Basket';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <RestaurantDetailScreen/>
      <HomeScreen/> */}
      {/* <DishDetailScreen/> */}
      <BasketScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
