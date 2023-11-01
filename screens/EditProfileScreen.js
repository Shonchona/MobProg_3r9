
import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import { Colors, auth } from '../config';

export const EditProfileScreen = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');

  
  const handleLogout = () => {
    signOut(auth).catch(error => console.log('Error logging out: ', error));
  };

  const handleSave = () => {
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Country:', country);
    console.log('City:', city);
  };


  const email = auth.currentUser.email;

  return (
    <>
      <View style={styles.main}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/pfp.png')}
            style={styles.profileIcon}
          />
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            textAlign='center'
          />
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.action}>
          <Feather name="phone" color={'white'} size={20} />
          <TextInput
            placeholder="Phone"
            placeholderTextColor="white"
            keyboardType="number-pad"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'white',
              },
            ]}
            value={phone}
            onChangeText={setPhone}
          />
        </View>
        <View style={styles.action}>
          <FontAwesome name="globe" color={'white'} size={20} />
          <TextInput
            placeholder="Country"
            placeholderTextColor="white"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'white',
              },
            ]}
            value={country}
            onChangeText={setCountry}
          />
        </View>
        <View style={styles.action}>
          <Icon name="map-marker-outline" color={'white'} size={20} />
          <TextInput
            placeholder="City"
            placeholderTextColor="white"
            autoCorrect={false}
            style={[
              styles.textInput,
              {
                color: 'white',
              },
            ]}
            value={city}
            onChangeText={setCity}
          />
        </View>
          
        <View style={styles.botbutton}>
        <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>SAVE</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>SIGN OUT</Text>
      </TouchableOpacity>
      </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    marginTop: 30,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileIcon: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    paddingHorizontal: 10,
    fontSize: 20,
  },
  email: {
    color: 'black',
    fontSize: 15,
    marginBottom: 20,
  },
  bottom: {
    flex: 1,
    backgroundColor: '#00A9FF',
    borderTopRightRadius: 25,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  botbutton: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 50,
    paddingRight: 85
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 0 : -10,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    paddingTop: 10,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blue,
    padding: 5,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: '500',
  },
});

export default EditProfileScreen;