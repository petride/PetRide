import { StyleSheet } from 'react-native';

export const drawerStyles = StyleSheet.create({

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
});