import React, { useContext }  from 'react'
import { Text, View, Modal, Button, Image, TouchableOpacity } from 'react-native';


import { permissionsStyles } from '../theme/permissionsTheme';
import { PermissionsContext } from '../context/PermissionsContext';
import { PermissionButton } from '../components/PermissionButton';
import { bottomMenuStyles } from '../theme/bottomMenuTheme';
import { ModalStyles } from '../theme/modalTheme';
import { Background } from '../components/Background';
import { loginStyles } from '../theme/loginTheme';

export const PermissionsScreen = () => {

    const { permissions, askLocationPermission } = useContext( PermissionsContext );

    return (
        <View style={
            permissionsStyles.container
        }>
            <Text style={
                permissionsStyles.title
            }>
                Es necesario dar algunos permisos para usar esta aplicación
            </Text>

            <Button
                title="Show"
                action={() => {

                }}
            >

            </Button>

            <Modal
                animationType="slide"
                onDismiss={() => console.log('Close Modal')}
                onShow={() => console.log('Show Modal')}
                transparent
                visible={true}
            >
                <View
                    style={[
                        ModalStyles.backgroundModal
                    ]}
                >
                    <View
                        style={[
                            ModalStyles.viewModal
                        ]}
                    >
                        <View
                            style={[
                                ModalStyles.iconModalContainer
                            ]
                            
                        }
                        >
                            <Image
                                style={ModalStyles.imageIcon} 
                                source={require('../assets/icon_gps_permission.png')}
                            />
                        </View>

                        <Text style={[
                            ModalStyles.title
                        ]}>
                            Es necesario el uso del GPS para utilizar esta aplicación
                        </Text>
                    </View>

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
                                    
                                >
                                    <Text style={ ModalStyles.buttonBlueText }>Permitir</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    
                </View>

            </Modal>

            {/*<PermissionButton
                title="Permiso"
                onPress={ askLocationPermission } 
            />*/}

            {/*<Text>
                { JSON.stringify( permissions, null, 5 ) }
            </Text>*/}
        </View>
    )
}
