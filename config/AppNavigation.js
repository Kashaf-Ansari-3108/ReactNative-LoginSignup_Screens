// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../screens/Signup1';
// import SignUp from '../screens/Signup2';
// import SignUp from '../screens/Signup3';
// import SignUp from '../screens/Signup4';
import Login from '../screens/Login1';
// import Login from '../screens/Login2';
// import Login from '../screens/Login3';
// import Login from '../screens/Login4';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="Login"
          component={Login}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
