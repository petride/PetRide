import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { Navigator } from './src/navigator/Navigator';
import { AuthProvider } from './src/context/AuthContext';
import { PermissionsProvider } from './src/context/PermissionsContext';

//const AppState = ( { children } : { children: JSX.Element | JSX.Element[] } ) => {
const AppState = ( { children } : any ) => {
  return(
    <AuthProvider>
      { children  }
    </AuthProvider>
  )
}

const AppPermissionsState = ( { children } : any) => {
  return(
    <PermissionsProvider>
       { children }
    </PermissionsProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <AppPermissionsState>
          <Navigator/>
        </AppPermissionsState>
      </AppState>
    </NavigationContainer>
  );
}

export default App;
