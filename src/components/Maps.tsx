import React, { useEffect } from 'react'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../screens/LoadingScreen';


export const Maps = () => {

    const { hasLocation, initialPosition } =  useLocation();

    if ( !hasLocation ) {
        return <LoadingScreen/>
    }

    return (
        <>
            <MapView
                style={{ flex: 1 }}
                //provider= { PROVIDER_GOOGLE }
                showsUserLocation
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitud,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >

                {/*<Marker
                    image={ require('../assets/custom-marker.png') }
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                    title="Mi Marker"
                    description="Esto es un marcador de prueba"
                />*/}
            
            </MapView>
        </>
    )
}
