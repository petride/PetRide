import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthContext } from '../context/AuthContext';

import { LoginScreen } from '../screens/LoginScreen';
import { RegisterScreen } from '../screens/RegisterScreen';
import { ProtectedScreen } from '../screens/ProtectedScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import { ForgotScreen } from '../screens/ForgotScreen';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import { MapScreen } from '../screens/MapScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import { Test } from '../screens/Test';

const Stack = createStackNavigator();

export const Navigator = () => {

  const { status } = useContext( AuthContext );
  const { permissions } = useContext( PermissionsContext);

  if( status === 'checking' ) return <LoadingScreen/>

  if( permissions.locationStatus === 'unavailable' ) return <LoadingScreen />

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
          {/*<Stack.Screen name="ProtectedScreen" component={ ProtectedScreen } />*/}
          {
            (permissions.locationStatus === 'granted')
              ? <Stack.Screen name="MapScreen" component={ Test } />
              : <Stack.Screen name="PermissionsScreen" component={ PermissionsScreen } />
          }
          </>
        ) 
    }
    </Stack.Navigator>
  );
}