import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, FlatList} from 'react-native';
import RestaurantItem from './src/components/RestuarantItem';
import restaurants from "./assets/data/restaurants.json";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <RestaurantItem restaurant={restaurants[0]}/> */}
      <FlatList data={restaurants} renderItem={({item})=><RestaurantItem restaurant={item}/>}/>
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
    padding:10
  },
});
