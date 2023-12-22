import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AddItems from './src/components/AddItems'
import ItemsDisplay from './src/ItemsDisplay'


const App = () => {
  const [items, setItems] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)



  const insertItem=item=>{
    if(item.length === 0){
      return;
    }
    setItems(currentItems=>{
      return[...currentItems,{id:Math.random().toString(), value: item}]
    });
    setIsAddMode(false)
  }

  console.log(items)

  const closeModel=()=>{
    setIsAddMode(false)
  }

  const handleDelete=(itemId)=>{
    setItems(curItems=>{
      return curItems.filter(item=>item.id !==itemId);
    })
        
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      <TouchableOpacity style={styles.button} onPress={()=>setIsAddMode(true)}>
        <Text style={styles.btnText}>Add New Items</Text>
      </TouchableOpacity>
      <AddItems isAddMode={isAddMode} closeModel={closeModel} insertItem={insertItem}/>
      <ItemsDisplay items={items} handleDelete={handleDelete}/>
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    backgroundColor:"red"
  },
  title:{
    textAlign:'center',
    marginTop:20,
    fontSize:28,
    fontWeight:"900",
    color:'#000'
  },
  button:{
    alignItems:"center",
    width:300,
    borderWidth:1,
    backgroundColor:"#000",
    height:40,
    marginLeft:30,
    marginTop:30
  },
  btnText:{
    color:"#fff",
    fontSize:18,
    margin:5,
    fontWeight:"900"
  }
})