import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import GoalItem from './GoalItem';
import GoalInput from './GoalInput';
import { 
  Button,
  ScrollView, 
  StyleSheet, 
  Text, 
  TextInput, 
  View,
  FlatList
  } from 'react-native';



export default function App() {


 const [goals,setGoals] = useState([]);
const [isModelVisible,setIsModelVisible] = useState(false);


  function addGoalHandle(goalText){
     setGoals((currentGoals)=>[...currentGoals,goalText]);
  }
  
  function deleteItem(index){
    const newGoals = goals.filter((element,i)=>i != index);
    setGoals(newGoals);
  }

  function handleModelVisible(){
    setIsModelVisible(true);
  }

  function handleModelVisibleClose(){
    setIsModelVisible(false);
  }
  
  return (
    <>
        <StatusBar style='light'/>
        <View style={styles.container}>
          <Button title='Add  New Goal' onPress={handleModelVisible} color='#d313a5'/>
          <GoalInput onAddGoal={addGoalHandle} onCloseModel = {handleModelVisibleClose} visible = {isModelVisible} />
          <FlatList
            data={goals}
            renderItem={(itemData)=>{
              return  <GoalItem onDelete={()=>deleteItem(itemData.index)} text={itemData.item} />
            }}  
          />
        </View>
    </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
    justifyContent:'center',
    backgroundColor:'#1A0037'
  },
  
});
