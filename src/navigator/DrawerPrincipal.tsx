import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';

import { Text, useWindowDimensions, StyleSheet, Image, View } from 'react-native';
import { LoginScreen } from '../screens/LoginScreen';
import { TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BUILDER_KEYS } from '@babel/types';
import { Test } from '../screens/Test';
import { LayoutMenuBottom } from '../components/LayoutMenuBottom';
import { MapScreen } from '../screens/MapScreen';

const Drawer = createDrawerNavigator();

export const  DrawerPrincipal = () => {

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
      <Drawer.Screen name="homeClientScreen" initialParams={{ ComponentToRender: MapScreen }} component={LayoutMenuBottom} />
      {/*<Drawer.Screen name="viajeScreen"  initialParams={{ ComponentToRender: ViajeScreen }} component={LayoutMenuBottom} />
      <Drawer.Screen name="registroClienteScreen"  component={RegistroClienteScreen} />
    <Drawer.Screen name="registroMascotaScreen"  component={RegistroMascotaScreen} />*/}
      
    </Drawer.Navigator>
  );
}

const ContenidoMenu2 = (props:any) => {
  return(
    <View style={styles2.scrollViewDrawer} >
      <View style={{flex:1}}>
        
        <View style={styles2.drawerMenuContainer}>

          <View style={styles2.avatarContainer}>
            <Image
                style={styles2.imageAvatar} 
                source={require('../assets/Avatar.png')}
            />
            <Text style={styles2.texAvatarNombre}>Usuario X</Text>
            <Text style={styles2.textAvatatarCalificacion}>Calificacion</Text>
            <Text style={styles2.textAvatarNotificaciones}>Notificaciones</Text>
          </View>

          <TouchableOpacity style={styles2.buttonMenu}>
            <Text style={styles2.textButtonMenu}>Mis Viajes</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles2.buttonMenu}>
            <Text style={styles2.textButtonMenu}>Pagos</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles2.buttonMenu}>
            <Text style={styles2.textButtonMenu}>Configuracion</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles2.buttonMenu}>
            <Text style={styles2.textButtonMenu}>Cerrar Sesion</Text>
          </TouchableOpacity>

        </View>
        
      </View>

      <View style={styles2.bottomLineDrawer}></View>
    </View>
  )

}

const styles2 = StyleSheet.create({
  scrollViewDrawer:{
    flex:1,
    backgroundColor:'white',
    paddingTop:0,
  },

  drawerMenuContainer:{
    flex:1, 
    backgroundColor:'white', 
    borderRightWidth:70, 
    borderRightColor:'#ABABAB'
  },

  avatarContainer:{
    //backgroundColor:'blue',
    height:210,
    paddingLeft:20,
    paddingTop:20,
    borderBottomWidth:1,
    borderBottomColor:'#006FB2',
    marginHorizontal:10
  },

  imageAvatar:{
    width:80,
    height:80,
  },

  texAvatarNombre:{
    marginTop:10,
    fontSize:20,
    color:'#006FB2',
  },

  textAvatatarCalificacion:{

  },

  textAvatarNotificaciones:{
    marginTop:15,
    fontSize:18,
    color:'#006FB2'
  },

  buttonMenu:{
    
    height:40,
    marginVertical:10,
    marginLeft:20,
    justifyContent:'center'
  },

  textButtonMenu:{
    fontSize:20,
    color:'#484848'
  },

  bottomLineDrawer:{
    height:50,
    backgroundColor:'#006FB2',
    borderRightWidth:70,
    borderRightColor:'#A6D8F6'
    
  },

})
