import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View,} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RestaurantDetailScreen from './src/screens/RestaurantDetailsScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <RestaurantDetailScreen/>

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
