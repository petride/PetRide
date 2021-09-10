import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Text, useWindowDimensions, StyleSheet, Image, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { LayoutMenuBottom } from '../components/LayoutMenuBottom';
import { MapScreen } from '../screens/MapScreen';
import { ProtectedScreen } from '../screens/ProtectedScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import { LoadingScreen } from '../screens/LoadingScreen';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import { drawerStyles } from '../theme/drawerTheme';



const Drawer = createDrawerNavigator();

export const  DrawerPrincipal = () => {

  const { permissions } = useContext(PermissionsContext);

  if( permissions.locationStatus === 'unavailable' ) return <LoadingScreen />

  const {width} = useWindowDimensions()

  return (
    <Drawer.Navigator
      drawerContent={ (props:any) =><ContenidoMenu2 {...props}/>}
      
      screenOptions={{
        headerShown:false,
        headerStyle:{backgroundColor:'transparent'},
        drawerPosition:'left',
        drawerType:(width >= 760)? ('permanent') : ('front'),
      }}
    >
      {
        (permissions.locationStatus === 'granted')
        ? (
          <>
            <Drawer.Screen name="MapScreen" initialParams={{ ComponentToRender: MapScreen }} component={LayoutMenuBottom} />
            <Drawer.Screen name="ProtectedScreen"  initialParams={{ ComponentToRender: ProtectedScreen }} component={LayoutMenuBottom} />
          </>
        ) :
        (
          <>
            <Drawer.Screen name="PermissionsScreen" initialParams={{ ComponentToRender: PermissionsScreen }} component={LayoutMenuBottom} />
          </>
        )
      }
      
      
    </Drawer.Navigator>
  );
}

const ContenidoMenu2 = (props:any) => {
  return(
    <View style={ drawerStyles.scrollViewDrawer } >
      <View style={{flex:1}}>
        
        <View style={ drawerStyles.drawerMenuContainer }>

          <View style={ drawerStyles.avatarContainer }>
            <Image
                style={ drawerStyles.imageAvatar } 
                source={require('../assets/Avatar.png')}
            />
            <Text style={ drawerStyles.texAvatarNombre} >Usuario X</Text>
            <Text style={ drawerStyles.textAvatatarCalificacion }>Calificacion</Text>
            <Text style={ drawerStyles.textAvatarNotificaciones }>Notificaciones</Text>
          </View>

          <TouchableOpacity 
            style={ drawerStyles.buttonMenu }
            onPress={ () => props.navigation.navigate('MapScreen') }  
          >
            <Text style={ drawerStyles.textButtonMenu }>Mis Viajes</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={ drawerStyles.buttonMenu }>
            <Text style={ drawerStyles.textButtonMenu }>Pagos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={ drawerStyles.buttonMenu }>
            <Text style={ drawerStyles.textButtonMenu }>Configuracion</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={ drawerStyles.buttonMenu }
            onPress={ () => props.navigation.navigate('ProtectedScreen') } 
          >
            <Text style={ drawerStyles.textButtonMenu }>Cerrar Sesion</Text>
          </TouchableOpacity>

        </View>
        
      </View>

      <View style={ drawerStyles.bottomLineDrawer }></View>
    </View>
  );
}