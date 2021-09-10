import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../context/AuthContext';

import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import { ForgotScreen } from '../screens/ForgotScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import { DrawerPrincipal } from './DrawerPrincipal';

const Stack = createStackNavigator();

export const Navigator = () => {

  const { status } = useContext( AuthContext );

  if( status === 'checking' ) return <LoadingScreen/>

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}  
    >

    {
        (status !== 'authenticated')
        ? (
            <>
                <Stack.Screen name="LoginScreen" component={ LoginScreen } />
                <Stack.Screen name="RegisterScreen" component={ RegisterScreen } />  
                <Stack.Screen name="ForgotScreen" component={ ForgotScreen } />  
            </>
        )
        : (
          <>
            <Stack.Screen name="drawerLogged" component={DrawerPrincipal} />
          </>
        ) 
    }
    </Stack.Navigator>
  );
}