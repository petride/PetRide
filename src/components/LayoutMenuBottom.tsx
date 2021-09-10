import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


interface Props extends DrawerScreenProps<any, any>{}

interface RouteParams{
    ComponentToRender:void | any
}

export const LayoutMenuBottom = (props:Props) => {

    const {ComponentToRender} = props.route.params as RouteParams

    console.log('PROPS DRAWER: ', props)
    return (
        <View style={{flex:1}}>
            <View style={styles.childrenComponentContainer}>
                <ComponentToRender propsDrawer={props}/>
            </View>
            <View style={styles.userButtonBottomMenuContainer}> 
                <Image
                    style={styles.imageUserMenuBottom} 
                    source={require('../assets/Avatar.png')}
                />
            </View>
            
            <View style={styles.menuBottomContainer}>
                <TouchableOpacity onPress={props.navigation.openDrawer}>
                    <Text> <Icon name='menu' size={45} color='white' /> </Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text> <Icon name='paw' size={45} color='white' /> </Text>
                </TouchableOpacity>
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
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
})
