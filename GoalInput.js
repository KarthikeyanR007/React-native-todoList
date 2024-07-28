import {
    View,
    Button,
    StyleSheet,
    TextInput,
    Modal,
    Image
} from 'react-native';
import { useState } from 'react';

function GoalInput(props){
    const [goalText,setGoalText] = useState('');

    function handleAddGoals(text) {
        setGoalText(text);
     }

    function addGoal(){
        props.onAddGoal(goalText);
        props.onCloseModel();
    }

  return(
    <Modal visible={props.visible} animationType='slide'>
       <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('./assets/images/dart2.png')} />
       <TextInput
          style={styles.inputBox}
          placeholder='Enter your Goal'
          onChangeText={handleAddGoals}
       />
       <View style={styles.buttonStyle}>
          <View style={{margin:10}}>
            <Button
                title='Cancel'
                onPress={props.onCloseModel}  
                color='#5e0acc'
            />
          </View>
          <View style={{margin:10}}>
            <Button
                title='Add Goal'
                onPress={addGoal}  
                color='#5e0acc'
            />
          </View>
       </View>
      </View>
    </Modal>
    
  );
}
const styles = StyleSheet.create({
    buttonStyle:{
       flexDirection:'row',
       justifyContent:'space-evenly',
    },
    inputContainer:{
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems:'center',
        margin:10,
        marginTop: 30,
        backgroundColor:'#1A0037'
      },
      inputBox: {
        width:'85%',
        borderWidth:2,
        borderColor: '#5e0acc',
        borderRadius: 10,
        paddingLeft: 10,
        marginBottom:20,
        color:'white'
      },
      image:{
        width:200,
        height:200,
        margin:20,
        borderRadius:100,
      }
});
export default GoalInput;