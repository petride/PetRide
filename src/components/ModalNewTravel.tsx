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
    price: string;
    calification: string;
}

export const ModalNewTravel = ( { onDismiss = () => null, onShow  = () => null, visible, children, onClose, title, description, price, calification}: Props ) => {

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
                            ModalStyles.viewModalNewTravel
                        ]}
                    >
                        <View
                            style={[
                                ModalStyles.titleContainerNewTravel
                            ]
                            
                        }
                        >
                            {
                                (title?.length)
                                ? (
                                    <Text style={[
                                        ModalStyles.titleNewTravel
                                    ]}>
            
                                        { title }
                
                                    </Text>
                                )
                                :
                                (
                                    <></>
                                )
                            }
                        </View>

                        <View
                            style={[
                                ModalStyles.contentDescriptionNewTravel
                            ]}
                        >
                            <View
                                style={[
                                    ModalStyles.contentDescriptionNewTravelLeft
                                ]}
                            >
                                <Text style={[
                                    ModalStyles.userTravel
                                ]}>Usuario: </Text>
                                <Text style={[
                                    ModalStyles.userTravel
                                ]}>Información Mascota: </Text>
                                <Text style={[
                                    ModalStyles.descriptionTravel
                                ]}>

                                    { description }
            
                                </Text>
                                <Text style={[
                                    ModalStyles.userTravel
                                ]}>Calificación: { calification }</Text>
                            </View>
                            <View
                                style={[
                                    ModalStyles.contentDescriptionNewTravelRight
                                ]}
                            >
                                <Text style={[
                                    ModalStyles.userTravel
                                ]}>MX { price }</Text>
                                { children }
                            </View>
                        </View>
                        
                    </View>
                    
                </View>

        </Modal>
           
    )
}
