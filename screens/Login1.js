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

function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const moveToSignup = ()=>{
     navigation.navigate('SignUp')
  }
  
  let login = () => {
    let obj = {
      email,
      password,
    };
    console.log(obj);
   
  };

  return (
    <>
      <ImageBackground style={styles.mainContainer} source={background}>
        <View style={{width: '100%', padding: 10}}>
          <View style={[{alignItems: 'center'}]}>
            <Image
              resizeMode="contain"
              style={{width: 150, height: 150}}
              source={logo}
            />
          </View>
          <View
            style={[{flexDirection: 'row', justifyContent: 'space-around'}]}>
            <Text style={[styles.login, {margin: 10}]}>LOGIN</Text>
            
            <TouchableOpacity onPress={moveToSignup}><Text style={[styles.signup, {margin: 10}]}>SIGNUP</Text></TouchableOpacity>
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
            <TouchableOpacity onPress={login} style={[styles.customBtn]}>
              <Text
                style={{color: '#22EDD9', textAlign: 'center', fontSize: 20}}>
                LOGIN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

export default Login;

const styles = StyleSheet.create({
  login: {
    fontSize: 15,
    color: '#22EDD9',
    textAlign: 'center',
  },
  signup: {
    fontSize: 15,
    color: '#0B534C',
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
