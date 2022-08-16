import {View,Text,Image,FlatList,StyleSheet} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import {Ionicons} from "@expo/vector-icons";
const restaurant = restaurants[0];
const RestaurantDetailScreen=()=>{
    return (
        <View style={styles.page}>
            <Image source={{uri:restaurant.image}} style={styles.image}/>
            <Ionicons name="arrow-back-circle"
                size={45}
                color="white"
                style={styles.iconContainer}/>
            <View style={styles.container}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.subtitle}>${restaurant.deliveryFee} &#8226; {restaurant.minDeliveryTime}-{restaurant.maxDeliveryTime} minutes</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page:{
        flex:1,
    },
    image:{
        width:"100%",
        aspectRatio:5/3,
    },
    iconContainer:{
        position:"absolute",
        top:40,
        left:10,
    },
    title:{
        fontSize:35,
        fontWeight:"600",
        marginVertical:10,
    },
    subtitle:{
        fontSize:15,
        color:"#525252",
    },
    container:{
        margin:10,
    }
});
export default RestaurantDetailScreen;