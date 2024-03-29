import React from 'react'

import {Button, Icon} from 'react-native-elements'


import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
        
import UserList from './views/UserList'
import UserForm from './views/UserForm'
import { UsersProvider } from './context/UserContext'


const Stack = createStackNavigator()

export default function App(props){
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}
        >
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({navigation}) =>{
              return{
                title:"Lista de Usuarios",
                headerRight: () =>(
                  <Button
                  onPress={() => navigation.navigate('UserForm')}
                    type="clear"
                    icon={<Icon name="add" size={25} color="#fff"/>}
                  />
                )
              }
            }}                                                                                                                       
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{
              title:"Formulario de Usuarios"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  )
}

const screenOptions = {
  headerStyle:{
    backgroundColor:'#f4511e'
  },
  headerTintColor:'#fff',
  headerTitleStyle:'bold'
}