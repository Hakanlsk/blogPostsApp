import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import {useRoute} from '@react-navigation/native'
import { Context } from '../context/BlogContext'
import { Octicons } from '@expo/vector-icons';

const ShowScreen = () => {
  const route = useRoute();
  const {id} = route.params;

  const {state} = useContext(Context);

  const blogPost = state.find(((blogPost) => blogPost.id === id ))

  return (
    <View style={styles.container}>
      <Text style={styles.title} >{blogPost.title}</Text>
      <View style={styles.contentContainer} >
        <Octicons name="dot-fill" size={16} color="black" />
        <Text style={styles.contentText}>{blogPost.content}</Text>
      </View>

    </View>
  )
}

export default ShowScreen

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    marginVertical:25,
  },
  title:{
    fontSize:36,
    fontWeight:'700',
    marginBottom:20
  },
  contentContainer:{
    alignSelf:'flex-start',
    marginLeft:20,
    flexDirection:'row',
    alignItems:'center'
  },
  contentText:{
    fontSize:20,
    marginLeft:10
  }
})