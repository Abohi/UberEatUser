import {View,Text} from "react-native";
import basketstyle from "./basketstyle";
const BasketDishItem=({dishItem})=>{
    return (
        <View style={basketstyle.row}>
        <View style={basketstyle.quantityContainer}><Text>1</Text></View>
        <Text style={{fontWeight:"600"}}>{dishItem.name}</Text>
        <Text style={{marginLeft:"auto"}}>{dishItem.price}</Text>
    </View>
    );
}
export default BasketDishItem;