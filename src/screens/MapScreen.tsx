import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import { Maps } from '../components/Maps';
import { ModalNewTravel } from '../components/ModalNewTravel';
import { ModalStyles } from '../theme/modalTheme';

export const MapScreen = ( props:any ) => {

    const [show, setShow] = useState(true);

    return (
        <View style={{ flex: 1}}>
            <Maps />

            <ModalNewTravel
                visible = {show}
                onClose = { () => setShow(false) }
                title = 'Solicitud de viaje'
                description = '(Especie, Raza, Tamaño)'
                price = '90.00'
                calification = '10'
            >
                <View
                    style={[
                        ModalStyles.bottomTravelButtonModalContainer
                    ]}
                >
                    <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={ ModalStyles.buttonBlueTravelModal }
                            //onPress={ logOut }
                            onPress= { () => setShow(false) }
                        >
                            <Text style={ ModalStyles.buttonBlueText }>Aceptar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={ 0.8 }
                        style={ ModalStyles.buttonRedTravelModal }
                        onPress= { () => setShow(false) }
                    >
                        <Text style={ ModalStyles.buttonRedText }>Cancelar</Text>
                    </TouchableOpacity>
                
                </View>
            </ModalNewTravel>
        </View>
    )
}
