import { StyleSheet } from 'react-native';

export const bottomMenuStyles = StyleSheet.create({
    childrenComponentContainer:{
        flex:1
    },

    menuBottomContainer:{
        height:50,
        backgroundColor:'#006FB2',
        flexDirection:'row',
        justifyContent:'space-between'
    },



    userButtonBottomMenuContainer:{
        width:90,
        height:90,
        borderRadius:90,
        backgroundColor:'white',
        zIndex:10,
        position:'absolute',
        bottom:0,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
        
    },

    imageUserMenuBottom:{
        width:60,
        height:60
    },
});