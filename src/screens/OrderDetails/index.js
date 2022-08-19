import {View,Text,FlatList,Image} from "react-native";
import orders from "../../../assets/data/orders.json";
import restaurants from "../../../assets/data/restaurants.json";
import BasketDishItem from "../Basket/basketdishitem";
import styles from './styles';
const order = orders[0];
const OrderDetailsHeader=()=>{
    return (
        <View>
            <View>
            <Image source={{uri:order.Restaurant.image}} style={styles.image}/>
            <View style={styles.container}>
            <Text style={styles.title}>{order.Restaurant.name}</Text>
            <Text style={styles.subtitle}>{order.status} &#8226; 2 days ago</Text>
            <Text style={styles.menuTitle}>
                Your orders
            </Text>
            </View>
        </View>
        </View>
    )
}
const OrderDetails=()=>{
    return (
       <FlatList data={restaurants[0].dishes} renderItem={({item})=><BasketDishItem dishItem={item}/>}
       ListHeaderComponent={OrderDetailsHeader}/>
    )
}
export default OrderDetails;

