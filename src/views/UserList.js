import React, { useContext } from 'react'

import {View, 
        StyleSheet,
        FlatList,
        Alert,
        } from 'react-native'
import { Avatar, Icon, ListItem, Button } from 'react-native-elements'

import UsersContext from '../context/UserContext'


export default function UserList(props){

  const {state, dispatch} = useContext(UsersContext)
  
  function confirmUserDeletion(user){
    Alert.alert('Ecluir Usuario', 'Deseja excluir o usuario?',[
      {
        text:'Sim',
        onPress(){
          dispatch({
            type:'deleteUser',
            payload:user,
          })
        }
      },
      {
        text:'Nao'
      }
    ])
  }

  function getUserItem({item: user}){
    return (
      <ListItem
          key={user.id}
          bottomDivider
          onPress={() => props.navigation.navigate('UserForm', user)} 
      >
        <Avatar rounded  source={{ uri: user.avatarUrl }}/>

        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
        </ListItem.Content>

        <Button
          onPress={() => {
            props.navigation.navigate('UserForm', user);
          }}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button 
          onPress={() => {confirmUserDeletion(user)}}
          type="clear"
          icon={<Icon name="delete" size={25} color="red"/>}
        />
      </ListItem>
    )
  }

  return(
    <View>
      <FlatList
        keyExtractor={user => user.id.toString()}
        data={state.users}
        renderItem={getUserItem}
      />

    </View>
  )
}