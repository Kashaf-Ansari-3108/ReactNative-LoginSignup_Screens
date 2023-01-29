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
    <View style={styles.main}>
      <View style={styles.btnCon}>
        <TouchableOpacity onPress={moveToSignup} style={{margin: 10}}>
          <Text style={styles.navBtn}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{margin: 10}}>
          <Text style={[styles.navBtn, {backgroundColor: '#ffa901'}]}>
            Sign in
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.mainHead}>Sign In</Text>
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
        <TouchableOpacity onPress={login} style={styles.btn}>
          <View style={styles.border}></View>
          <Text style={{color: '#22083E'}}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={moveToSignup} style={styles.nav}>
          <Text
            style={{
              color: '#22083E',
              borderBottomWidth: 2,
              borderBottomColor: '#ffa901',
            }}>
            I have to register
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        source={logo}
        style={{
          width: 300,
          height: 300,
          position: 'absolute',
          top: 50,
        }}></Image>
    </View>
  );
}

export default Login;

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
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:9999
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
