import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import logo from '../assests/logo3.png';

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
    <View style={styles.main}>
      <View style={styles.btnCon}>
        <TouchableOpacity style={{margin: 10}}>
          <Text style={[styles.navBtn, {backgroundColor: '#ffa901'}]}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={moveToLogin} style={{margin: 10}}>
          <Text style={[styles.navBtn]}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.mainHead}>Sign Up</Text>
        <View style={{width: '60%', alignItems: 'flex-start'}}>
          <Text style={{color: '#22083E'}}>Username</Text>
        </View>
        <View style={styles.input}>
          <TextInput  onChangeText={e => setName(e)} color="#22083E" />
        </View>
        <View style={{width: '60%', alignItems: 'flex-start'}}>
          <Text style={{color: '#22083E'}}>Contact</Text>
        </View>
        <View style={styles.input}>
          <TextInput  onChangeText={e => setContact(e)} color="#22083E" keyboardType="numeric" />
        </View>
        <View style={{width: '60%', alignItems: 'flex-start'}}>
          <Text style={{color: '#22083E'}}>Email</Text>
        </View>
        <View style={styles.input}>
          <TextInput  onChangeText={e => setEmail(e)} color="#22083E" keyboardType="email-address" />
        </View>
        <View style={{width: '60%', alignItems: 'flex-start'}}>
          <Text style={{color: '#22083E'}}>Password</Text>
        </View>
        <View style={styles.input}>
          <TextInput  onChangeText={e => setPassword(e)} color="#22083E" secureTextEntry={true} />
        </View>
        <TouchableOpacity onPress={signup} style={styles.btn}>
          <View style={styles.border}></View>
          <Text style={{color: '#22083E'}}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={moveToLogin} style={styles.nav}>
          <Text
            style={{
              color: '#22083E',
              borderBottomWidth: 2,
              borderBottomColor: '#ffa901',
            }}>
            I'm already registered
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        source={logo}
        style={{
          width: 350,
          height: 350,
          position: 'absolute',
          top: 60,
        }}></Image>
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#abdbe3',
    height: '100%',
  },
  btnCon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  navBtn: {
    color: '#22083E',
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  mainHead: {
    color: '#22083E',
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: '#22083E',
    borderRadius: 100,
    paddingHorizontal: 10,
    width: '70%',
    height: 40,
    justifyContent: 'center',
    marginVertical: 10,
    zIndex:9999
  },

  btn: {
    backgroundColor: '#ffa901',
    width: '70%',
    borderRadius: 100,
    padding: 12,
    alignItems: 'center',
    marginTop: 10,
    position: 'relative',
  },
  border: {
    borderWidth: 5,
    borderColor: '#22083E',
    width: 250,
    paddingVertical: 15,
    borderRadius: 100,
    alignItems: 'center',
    position: 'absolute',
    top: 8,
    right: 5,
  },
  nav: {
    width: '60%',
    alignItems: 'flex-start',
    marginTop: 20,
  },
});
