import React, { useContext, useState } from 'react'
import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from 'react-native'
import { ModalPermission } from '../components/ModalPermission';
import { PermissionButton } from '../components/PermissionButton';
import { AuthContext } from '../context/AuthContext';
import { ModalStyles } from '../theme/modalTheme';
import { permissionsStyles } from '../theme/permissionsTheme';
import { ModalNewTravel } from '../components/ModalNewTravel';

export const ProtectedScreen  = ( props:any ) => {

    const { user, token, logOut } = useContext(AuthContext);
    const [show, setShow] = useState(false);

    return (
        <View style={
            permissionsStyles.container
        }>
            {/*<Text style={
                permissionsStyles.title
            }>
                Es necesario dar algunos permisos para usar esta aplicación
        </Text>*/}

            <PermissionButton
                title="Cerrar Sesión"
                onPress={ () => {
                    setShow(true);
                }} 
            />

            <ModalPermission
                visible = {show}
                onClose = { () => setShow(false) }
                title = 'Salir'
                description = '¿Estás seguro que quieres salir?'
                imageURL = 'logout'
            >
                <View
                    style={[
                        ModalStyles.bottomButtonModalContainer
                    ]}
                >
                    <View
                    style={[
                            ModalStyles.buttonModalContainer
                        ]}
                    >
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={ ModalStyles.buttonRedModal }
                            onPress= { () => setShow(false) }
                        >
                            <Text style={ ModalStyles.buttonRedText }>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={[
                            ModalStyles.buttonModalContainer
                        ]}
                    >
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={ ModalStyles.buttonBlueModal }
                            onPress={ logOut }
                        >
                            <Text style={ ModalStyles.buttonBlueText }>Si</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ModalPermission>
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginBottom: 20
    }
});