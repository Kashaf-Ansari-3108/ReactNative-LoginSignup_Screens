import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import background from '../assests/background3.jpg';

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
    <View>
      <Image style={{width: '100%', height: 175}} source={background} />
      <View style={styles.inputContainer}>
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
        <TouchableOpacity onPress={login} style={styles.btn}>
          <Text style={{color: 'white'}}>Sign In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.navCon}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={moveToSignup} style={styles.btn2}>
          <Text style={{color: '#1e3f5e'}}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
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
