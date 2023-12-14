import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import {Context} from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';

import {useNavigation} from '@react-navigation/native'

const IndexScreen = () => {
  const {state, deleteBlogPost} = useContext(Context);
  const navigation = useNavigation();

  return (
      <View>
        <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({item})=>{
          return (
          <TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})}>
          <View style={styles.row}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity onPress= {() => deleteBlogPost(item.id)}>
              <Feather name="trash-2" size={24} color="black" />
            </TouchableOpacity>
          </View>
          </TouchableOpacity>)
        }}
        />
      </View>
    
  )
}


export default IndexScreen

const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderTopWidth:1,
    borderColor:'gray',
    paddingVertical:20,
    paddingHorizontal:10
  },
  title:{
    fontSize:18
  }
})