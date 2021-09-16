import React from 'react'
import { StyleProp, Text, TouchableOpacity, ViewStyle, StyleSheet } from 'react-native';
import { permissionsStyles } from '../theme/permissionsTheme';

interface Props {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>
}

export const PermissionButton = ( { title, onPress, style = {} }: Props ) => {
    return (
        <TouchableOpacity
            onPress={ onPress }
            activeOpacity={ 0.9 }
            style ={{
                ...style as any,
                ...permissionsStyles.blackButton
            }}
        >
            <Text style={ permissionsStyles.buttonText }> { title } </Text>
        </TouchableOpacity>
    )
}