import React, {  useContext, useState }  from 'react'
import { Text, View, Modal, Image, TouchableOpacity } from 'react-native';


import { permissionsStyles } from '../theme/permissionsTheme';
import { PermissionsContext } from '../context/PermissionsContext';
import { PermissionButton } from '../components/PermissionButton';
import { ModalStyles } from '../theme/modalTheme';
import { ModalPermission } from '../components/ModalPermission';

export const PermissionsScreen = () => {

    const { permissions, askLocationPermission } = useContext( PermissionsContext );
    const [show, setShow] = useState(false);

    return (
        <View style={
            permissionsStyles.container
        }>
            <Text style={
                permissionsStyles.title
            }>
                Es necesario dar algunos permisos para usar esta aplicación
            </Text>

            <PermissionButton
                title="Permiso"
                onPress={ () => {
                    setShow(true);
                }} 
            />

            <ModalPermission
                visible = { show}
                onClose = { () => setShow(false) }
                description = 'Es necesario el uso del GPS para utilizar esta aplicación.'
                imageURL = 'gps'
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
                            <Text style={ ModalStyles.buttonRedText }>No permitir</Text>
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
                            onPress={ askLocationPermission }
                        >
                            <Text style={ ModalStyles.buttonBlueText }>Permitir</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ModalPermission>
        </View>
    )
}
