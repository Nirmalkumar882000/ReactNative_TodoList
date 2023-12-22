import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ItemsDisplay = ({items,handleDelete}) => {
   
  return (
    <FlatList
        keyExtractor={(item,index)=> item.id}
        data={items}
        contentContainerStyle={{
            paddingBottom:80,
            paddingTop:20,
            padding:30
        }}
        showsVerticalScrollIndicator={false}
        renderItem={(itemData)=>{
            return (
                <View style={styles.listItem}>
                    <Text style={styles.text}>{itemData.item.value}</Text>
                    <TouchableOpacity style={styles.button} onPress={()=>handleDelete(itemData.item.id)} >
                        <Text style={styles.btnText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            )
        }}
    />
   
  )
}

export default ItemsDisplay

const styles = StyleSheet.create({
    listItem:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        borderWidth:2,
        borderColor:"#fff",
        marginTop:20
    },
    button:{
        margin:12,
        borderWidth:1,
        width:50,
        backgroundColor:'red',
        borderColor:'#000'
    },
    btnText:{
        color:'#fff',
        textAlign:"center",
        fontSize:15,
        fontWeight:'900'
    },
    text:{
        fontSize:30,
        color:"#fff",
        fontWeight:'900',
        marginLeft:15
    }
})