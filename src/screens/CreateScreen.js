import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React,{useContext, useState} from 'react'
import { Context } from '../context/BlogContext'
import {useNavigation} from '@react-navigation/native'

const CreateScreen = () => {

  const navigation = useNavigation();

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const {addBlogPost} = useContext(Context);

  return (
    <View style={styles.container} >
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} value={title} onChangeText={ (text) => setTitle(text)}/>
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput style={styles.input} value={content} onChangeText={ (text) => setContent(text)} />
      <Button
        title="Add Blog Post"
        onPress={() => {
          addBlogPost(title, content, () => {
            navigation.navigate('Blogs');
          });
        }}
      />
    </View>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
    container:{
        padding:10,
        justifyContent:'space-between'
    },
    input :{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom:15,
        padding:5
    },
    label:{
        fontSize:20,
        marginBottom:5
    }
})