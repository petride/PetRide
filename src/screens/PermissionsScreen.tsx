import React, { useContext }  from 'react'
import { Text, View } from 'react-native';


import { permissionsStyles } from '../theme/permissionsTheme';
import { PermissionsContext } from '../context/PermissionsContext';
import { PermissionButton } from '../components/PermissionButton';

export const PermissionsScreen = () => {

    const { permissions, askLocationPermission } = useContext( PermissionsContext );

    return (
        <View style={
            permissionsStyles.container
        }>
            <Text style={
                permissionsStyles.title
            }>
                Es necesario el uso del GPS para usar esta aplicación
            </Text>

            <PermissionButton
                title="Permiso"
                onPress={ askLocationPermission } 
            />

            {/*<Text>
                { JSON.stringify( permissions, null, 5 ) }
            </Text>*/}
        </View>
    )
}
