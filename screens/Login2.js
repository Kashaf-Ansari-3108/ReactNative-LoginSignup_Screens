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
              style={{width: 100, height: 100}}
              source={logo}
            />
          </View>
          <View
            style={[{flexDirection: 'row', justifyContent: 'space-around'}]}>
            <Text style={[styles.login, {margin: 10}]}>Sign in</Text>
          </View>

          <View style={{padding: 10, alignItems: 'flex-start', marginTop: 50}}>
            <Text style={styles.label}>E-Mail</Text>
            <TextInput
              keyboardType="email-address"
              onChangeText={e => setEmail(e)}
              style={[styles.inp]}
            />
          </View>
          <View style={{padding: 10, alignItems: 'flex-start'}}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              secureTextEntry={true}
              onChangeText={e => setPassword(e)}
              style={[styles.inp]}
            />
          </View>
          <View style={{padding: 10, alignItems: 'center'}}>
            <TouchableOpacity onPress={login} style={[styles.customBtn]}>
              <Text
                style={{
                 
                  color: 'white',
                  backgroundColor: '#0D0A37',
                  textAlign: 'center',
                  fontSize: 20,
                  paddingVertical: 10,
                }}>
                Sign in
              </Text>
            </TouchableOpacity>
           </View>
           <View style={{alignItems:'flex-start',flexDirection:"row"}}>
            <Text style={[styles.label,{marginHorizontal:10}]}>Don't have an account?</Text>
            <TouchableOpacity onPress={moveToSignup} style={{marginHorizontal:10}}><Text style={styles.label}>Sign up &gt; </Text></TouchableOpacity>
            </View>
        </View>
      </ImageBackground>
    </>
  );
}

export default Login;

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
    color: 'grey'
  },
  inp: {
    width: '95%',
    padding: 10,
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
