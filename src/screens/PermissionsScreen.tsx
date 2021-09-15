import React, {  useContext, useState }  from 'react'
import { Text, View, Modal, Image, TouchableOpacity } from 'react-native';


import { permissionsStyles } from '../theme/permissionsTheme';
import { PermissionsContext } from '../context/PermissionsContext';
import { PermissionButton } from '../components/PermissionButton';
import { ModalStyles } from '../theme/modalTheme';
import { ModalComponent } from '../components/Modal';

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

            <Modal
                animationType="slide"
                onDismiss={() => console.log('Close Modal')}
                onShow={() => console.log('Show Modal')}
                transparent
                visible={show}
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
                                    onPress= { () => {
                                        setShow(false);
                                    }}
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
