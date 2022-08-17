import {View,FlatList} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import {Ionicons} from "@expo/vector-icons";
import DishListItem from '../../components/DishListItem';
import RestaurantHeader from './Header';
import styles from './styles';
const restaurant = restaurants[0];
const RestaurantDetailScreen=()=>{
    return (
        <View style={styles.page}>
            <FlatList 
            ListHeaderComponent={()=><RestaurantHeader restaurant={restaurant}/>}
            data={restaurant.dishes}
            renderItem={({item})=><DishListItem dish={item}/>}/>
             <Ionicons name="arrow-back-circle"
                size={45}
                color="white"
                style={styles.iconContainer}/>
        </View>
    );
}

export default RestaurantDetailScreen;