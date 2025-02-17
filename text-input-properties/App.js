import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text, Button, Alert} from 'react-native';
import {Ionicons} from '@expo/vector-icons'

const HanleInputExample = () => {

  const [fname, setFname] = useState('');
  const [lname, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


 const handleSubmit = () =>{
    Alert.alert('Registration Details: ', 'First Name: ' + fname  + '\nLast Name: ' + lname + '\nAge: ' + age + '\nEmail: ' +email)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.header}> Registration Form</Text>
      <View style={styles.inputContainer}>
            <Ionicons name="person-circle-outline" size={20} color="gray" style={styles.icon}/>
        <TextInput
          style = {styles.input}
          placeholder = "First Name"
          onChangeText = {(value) => setFname(value)}
          autoFocus={true}
          maxLength={30}
        /> 
      </View>
       <View style={styles.inputContainer}>
            <Ionicons name="person-circle-outline" size={20} color="gray" style={styles.icon}/>
        <TextInput
          style = {styles.input}
          placeholder = "Last Name"
          onChangeText = {(value) => setName(value)}
          maxLength={30}
        /> 
      </View>
       <View style={styles.inputContainer}>
            <Ionicons name="calendar-number-outline" size={20} color="gray" style={styles.icon}/>
        <TextInput
          style = {styles.input}
          placeholder = "Age"
          keyboardType="phone-pad"
          onChangeText = {(value) => setAge(value)}
        /> 
      </View>
       <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon}/>
        <TextInput
          style = {styles.input}
          placeholder = "Email"
          keyboardType="email-address"
          maxLength={30}
          onChangeText = {(value) => setEmail(value)}
        /> 
      </View>
       <View style={styles.inputContainer}>
            <Ionicons name="key-outline" size={20} color="gray" style={styles.icon}/>
        <TextInput
          style = {styles.input}
          secureTextEntry = {true}
          placeholder = "Password"
          maxLength={30}
          onChangeText = {(value) => setPassword(value)}
        /> 
        
        
      </View>
      <View style={styles.inputContainer}>
            <Ionicons name="id-card-outline" size={20} color="gray" style={styles.icon}/>
        <TextInput
          style = {styles.input}
          placeholder = "Full Name"
          value = {fname  }
          maxLength={30}
        /> 
      </View>
      <Text>This field is non editable</Text>

        <Button
          title="Register"
          onPress={handleSubmit}
        />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    height: 40,
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 3,
    paddingVertical:3,

  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical:10,
    margin: 3
  },
  icon : {
    marginRight: 10
  },
  header : {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize:16
  }
  // displayText: {
  //   marginTop: 10,
  //   fontSize: 10
  // }
});

export default HanleInputExample;
