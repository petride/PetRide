import React from 'react'
import { Image, Modal, Text, View, TouchableOpacity } from 'react-native';
import { ModalStyles } from '../theme/modalTheme';

interface Props {
    onDismiss: () => void;
    onShow: () => void;
    visible: boolean;
    children: any;
    onClose: () => void;
    title: string | null;
    description: string;
    imageURL: string;
}

export const ModalPermission = ( { onDismiss = () => null, onShow  = () => null, visible, children, onClose, title, description, imageURL}: Props ) => {

    var imagePath = '';

    if(imageURL === 'gps')
        imagePath = require('../assets/icon_gps_permission.png');
    else if(imageURL === 'logout')
        imagePath = require('../assets/icon_close_sesion.png');

    return (
        <Modal
                animationType="slide"
                onDismiss={ onDismiss }
                onShow={ onShow }
                transparent
                visible= { visible }
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
                                //source={require( '../assets/icon_gps_permission.png' )}
                                source={imagePath}
                            />
                        </View>
                        {
                            (title?.length)
                            ? (
                                <Text style={[
                                    ModalStyles.title
                                ]}>
        
                                    { title }
            
                                </Text>
                            )
                            :
                            (
                                <></>
                            )
                        }

                        <Text style={[
                            ModalStyles.description
                        ]}>

                            { description }
    
                        </Text>
                    </View>

                    { children }
                    
                </View>

        </Modal>
           
    )
}
