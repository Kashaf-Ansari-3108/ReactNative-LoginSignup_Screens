import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import background from '../assests/background3a.jpg';

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
    <ImageBackground source={background} style={styles.main}>
      <Text style={styles.mainHead}>Sign Up</Text>
      <Text style={{marginLeft:20}}> → To join the Community</Text>
      <View style={styles.inputContainer}>
        
      <View style={styles.input}>
          <TextInput
          onChangeText={e => setName(e)}
            color="#7C8197"
            placeholder="Username"
            placeholderTextColor="#7C8197"
          />
        </View>
        <View style={styles.input}>
          <TextInput
          onChangeText={e => setContact(e)}
          color="#7C8197"
            keyboardType="numeric"
            placeholder="Contact"
            placeholderTextColor="#7C8197"
          />
        </View>
        <View style={styles.input}>
          <TextInput
          onChangeText={e => setEmail(e)}
          color="#7C8197"
            keyboardType="email-address"
            placeholder="Email"
            placeholderTextColor="#7C8197"
          />
        </View>
        <View style={styles.input}>
          <TextInput
          onChangeText={e => setPassword(e)}
          color="#7C8197"
            secureTextEntry={true}
            placeholder="Password"
            placeholderTextColor="#7C8197"
          />
        </View>
        <TouchableOpacity onPress={signup} style={styles.btn}>
          <Text style={{color: 'white'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navCon}>
        <Text style={{color: '#1e3f5e'}} >Already have an account?</Text>
        <TouchableOpacity onPress={moveToLogin} style={styles.btn}>
          <Text style={{color: 'white'}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default SignUp;

const styles = StyleSheet.create({
 main:{
   height:'100%',
 },
 mainHead:{
   fontSize:30,
   color:'#1e3f5e',
   alignItems:'flex-start',
   marginTop:20,
   marginLeft:20
 },
  inputContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#E5E7F1',
    borderRadius: 100,
    paddingHorizontal: 10,
    width: '85%',
    justifyContent: 'center',
    marginVertical: 10,
    
  },
  btn: {
    backgroundColor: '#1e3f5e',
    width: '85%',
    borderRadius: 100,
    padding: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  btn2: {
    borderWidth: 2,
    borderColor: '#1e3f5e',
    width: '85%',
    borderRadius: 100,
    padding: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  navCon: {
    alignItems: 'center',
    marginTop: 20,
  },
});
