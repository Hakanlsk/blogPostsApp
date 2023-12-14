import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/context/BlogContext'
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { NavigationContainer, useNavigationContainerRef  } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function App() {
  
  const navigationRef = useNavigationContainerRef();

  return (
    <Provider>
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen 
        options={{
          title:"Blogs",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigationRef.navigate('Create')}>
              <AntDesign name="pluscircleo" size={24} color="black" />
            </TouchableOpacity>
          )
        }}
        name="Blogs" component={IndexScreen} />
        <Stack.Screen 
        options={{
          title:"Show",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigationRef.navigate('Edit')}>
              <Feather name="edit" size={24} color="black" />
            </TouchableOpacity>
          )
        }}
        name="Show" component={ShowScreen} />
        <Stack.Screen 
        options={{
          title:"Create"
        }}
        name="Create" component={CreateScreen} />
        <Stack.Screen 
        options={{
          title:"Edit"
        }}
        name="Edit" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
