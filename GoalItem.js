import react from 'react';
import {View,Text,StyleSheet,Pressable} from 'react-native'
function GoalItem(props) {
    // function deleteItem(){
    //   props.onDelete
    // }
    return(
      
    <View style={styles.GoalsContainer}>
       <Pressable
        style={{width:'100%'}}
        onPress={props.onDelete}
        android_ripple={{color:"#dddddd"}}
       >
        <Text style={styles.GoalList} >{props.text}</Text>
       </Pressable>   
     </View> 
    );
}

const styles = StyleSheet.create({
    GoalsContainer:{
        borderRadius:6,
        marginVertical:8,
        marginRight:15,
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
        width:"100%",
        backgroundColor:'#5e0acc',
      },
    GoalList:{
        padding:8,
        color:'white',
        width:'90%',
        alignContent:'center',
        justifyContent:'center',
      }
}
);

export default GoalItem;