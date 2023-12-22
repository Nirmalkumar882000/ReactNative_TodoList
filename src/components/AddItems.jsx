import {
  Modal,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const AddItems = ({isAddMode,closeModel,insertItem}) => {

    const [items, setItems] = useState("")

   

  return (
    <Modal visible={isAddMode} animationType="slide">
      <View style={styles.container}>
        <View style={styles.inputcontainer}>
          <TextInput placeholder="New Items" placeholderTextColor="#000" style={styles.input} value={items} onChangeText={(text)=>setItems(text)} />
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={()=>{insertItem(items)
        setItems("")}}>
            <Text style={styles.btnText}>Add New Items</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={closeModel}>
            <Text style={styles.btnText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddItems;

const styles = StyleSheet.create({
  inputcontainer: {
    marginTop: 30,
    width: 300,
    marginLeft: 25,
    borderRadius: 10,
    
  },
  input: {
    color: '#000',
    backgroundColor:'#fff',
    borderRadius:5
  },
  container:{
    backgroundColor:"green",
    height:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    alignItems:"center",
    width:300,
    borderWidth:1,
    backgroundColor:"#000",
    height:40,
    marginLeft:25,
    marginTop:30,
    borderRadius:8
  },
  btnText:{
    color:"#fff",
    fontSize:18,
    margin:5,
    fontWeight:"900"
  }
});
