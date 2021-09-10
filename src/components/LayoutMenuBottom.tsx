import { DrawerScreenProps } from '@react-navigation/drawer';
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { bottomMenuStyles } from '../theme/bottomMenuTheme';


interface Props extends DrawerScreenProps<any, any>{}

interface RouteParams{
    ComponentToRender:void | any
}

export const LayoutMenuBottom = (props:Props) => {

    const {ComponentToRender} = props.route.params as RouteParams

    return (
        <View style={{flex:1}}>
            <View style={bottomMenuStyles.childrenComponentContainer}>
                <ComponentToRender propsDrawer={props}/>
            </View>
            <View style={bottomMenuStyles.userButtonBottomMenuContainer}> 
                <Image
                    style={bottomMenuStyles.imageUserMenuBottom} 
                    source={require('../assets/Avatar.png')}
                />
            </View>
            
            <View style={bottomMenuStyles.menuBottomContainer}>
                <TouchableOpacity onPress={props.navigation.openDrawer}>
                    <Text> <Icon name='menu' size={45} color='white' /> </Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text> <Icon name='paw' size={45} color='white' /> </Text>
                </TouchableOpacity>
            </View>

            
        </View>
    );
}
