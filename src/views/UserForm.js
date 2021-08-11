import React, { useState } from 'react'

import {View, 
        Text, 
        StyleSheet,
        TextInput,
        Button} from 'react-native'


export default function UserForm({route, navigation}){
  const [user, setUser] = useState(route.params ? route.params : {})
  return(
    <View style={styles.form}>
      <Text>Nome</Text>
      <TextInput
        style={styles.input}
        onChangeText={name => setUser({...user, name})}
        placeholder="Informe o Nome"
        value={user.name}
      />
      <Text>Email</Text>
      <TextInput
        style={styles.input}
        onChangeText={email => setUser({...user, email})}
        placeholder="Informe o Email"
        value={user.email}
      />
      <Text>Url do Avatar</Text>
      <TextInput
        style={styles.input}
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        placeholder="Informe a Url do Avatar"
        value={user.avatarUrl}
      />

      <Button 
        title="Salvar"  
        onPress={() =>{
          navigation.goBack()
        }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  form:{
    padding: 12,
  },
  input:{
    height: 40,
    borderColor: 'gray',
    borderWidth:1,
    marginBottom:10,
  }
})