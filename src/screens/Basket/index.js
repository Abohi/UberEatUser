import {View,Text,FlatList} from 'react-native';
import restaurants from '../../../assets/data/restaurants.json';
import BasketDishItem from './basketdishitem';
import basketstyle from './basketstyle';
const restaurant= restaurants[0];
const BasketScreen = ()=>{
  
    return (
      <View style={basketstyle.page}>
        <Text style={basketstyle.name}>
            {restaurant.name}
        </Text>
        <Text>Your items</Text>
        <FlatList data={restaurant.dishes} renderItem={({item})=><BasketDishItem dishItem={item}/>}/>
        <View style={basketstyle.separator}/>
        <View style={basketstyle.button}>
            <Text style={basketstyle.buttonText}>
                Create order
            </Text>
        </View>
      </View>
    )
}

export default BasketScreen;
