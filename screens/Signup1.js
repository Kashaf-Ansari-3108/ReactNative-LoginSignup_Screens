import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import background from '../assests/background1.jpg';
import logo from '../assests/logo1.png';


function SignUp({navigation}) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const moveToLogin = () => {
    navigation.navigate('Login');
  };

  let signup = () => {
    let obj = {
      name,
      contact,
      email,
      password,
    };
   console.log(obj);
    navigation.navigate('Login');
  };

  return (
    <>
      <ImageBackground style={styles.mainContainer} source={background}>
        <View style={{width: '100%', padding: 10}}>
          <View style={[{alignItems: 'center'}]}>
            <Image
              resizeMode="contain"
              style={{width: 80, height: 80}}
              source={logo}
            />
          </View>
          <View
            style={[{flexDirection: 'row', justifyContent: 'space-around'}]}>
          <TouchableOpacity onPress={moveToLogin}><Text style={[styles.login, {margin: 10}]}>LOGIN</Text></TouchableOpacity> 
           <Text style={[styles.signup, {margin: 10}]}>SIGNUP</Text>
          </View>
          <View style={{padding: 10, alignItems: 'center'}}>
            <TextInput
              onChangeText={e => setName(e)}
              style={[styles.inp, styles.shadow]}
              placeholder="USERNAME"
            />
          </View>
          <View style={{padding: 10, alignItems: 'center'}}>
            <TextInput
              keyboardType="numeric"
              onChangeText={e => setContact(e)}
              style={[styles.inp, styles.shadow]}
              placeholder="CONTACT"
            />
          </View>
          <View style={{padding: 10, alignItems: 'center'}}>
            <TextInput
              keyboardType="email-address"
              onChangeText={e => setEmail(e)}
              style={[styles.inp, styles.shadow]}
              placeholder="EMAIL"
            />
          </View>
          <View style={{padding: 10, alignItems: 'center'}}>
            <TextInput
              secureTextEntry={true}
              onChangeText={e => setPassword(e)}
              style={[styles.inp, styles.shadow]}
              placeholder="PASSWORD"
            />
          </View>
          <View style={{padding: 10, alignItems: 'center'}}>
            <TouchableOpacity onPress={signup} style={[styles.customBtn]}>
              <Text
                style={{color: '#22EDD9', textAlign: 'center', fontSize: 20}}>
                SIGNUP
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  login: {
    fontSize: 15,
    color: '#0B534C',
    textAlign: 'center',
  },
  signup: {
    fontSize: 15,
    color: '#22EDD9',
    textAlign: 'center',
  },
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  inp: {
    width: '95%',
    padding: 10,
    fontSize: 15,
    backgroundColor: '#22EDD9',
    borderRadius: 100,
    textAlign: 'center',
  },
  customBtn: {
    width: '100%',
    padding: 10,
    borderRadius: 100,
    borderColor: '#22EDD9',
    borderWidth: 2,
  },
});
