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
import background from '../assests/background2.jpg';
import logo from '../assests/logo2.png';

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
          <View style={[{alignItems: 'center', flexDirection: 'row'}]}>
            <Image
              resizeMode="contain"
              style={{width: 100, height: 100}}
              source={logo}
            />
            <Text style={[styles.login, {margin: 10}]}>Sign up</Text>
          </View>
          <View style={{padding: 10, alignItems: 'flex-start', marginTop: 30}}>
            <Text style={styles.label}>User-Name</Text>
            <TextInput
              onChangeText={e => setName(e)}
              keyboardType="default"
              style={[styles.inp]}
            />
          </View>
          <View style={{padding: 5, alignItems: 'flex-start'}}>
            <Text style={styles.label}>Contact</Text>
            <TextInput
              onChangeText={e => setContact(e)}
              keyboardType="numeric"
              style={[styles.inp]}
            />
          </View>
          <View style={{padding: 5, alignItems: 'flex-start'}}>
            <Text style={styles.label}>E-Mail</Text>
            <TextInput
              onChangeText={e => setEmail(e)}
              keyboardType="email-address"
              style={[styles.inp]}
            />
          </View>
          <View style={{padding: 5, alignItems: 'flex-start'}}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              onChangeText={e => setPassword(e)}
              secureTextEntry={true}
              style={[styles.inp]}
            />
          </View>
          <View style={{padding: 10, alignItems: 'center'}}>
            <TouchableOpacity onPress={signup} style={[styles.customBtn]}>
              <Text
                style={{
                  color: 'white',
                  backgroundColor: '#0D0A37',
                  textAlign: 'center',
                  fontSize: 20,
                  paddingVertical: 10,
                }}>
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'flex-start', flexDirection: 'row'}}>
            <Text style={[styles.label, {marginHorizontal: 10}]}>
              Already have an account?
            </Text>
            <TouchableOpacity
              onPress={moveToLogin}
              style={{marginHorizontal: 10}}>
              <Text style={styles.label}>Sign in &gt; </Text>
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
    fontSize: 28,
    color: 'white',
    textAlign: 'center',
  },

  mainContainer: {
    alignItems: 'center',
    height: '100%',
  },
  label: {
    color: 'grey',
  },
  inp: {
    width: '95%',
    padding: 5,
    fontSize: 15,

    color: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  },
  customBtn: {
    width: '70%',
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'black',
  },
});
