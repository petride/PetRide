import React, { useEffect, useRef } from 'react'

import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { useLocation } from '../hooks/useLocation';
import { LoadingScreen } from '../screens/LoadingScreen';
import { FabMap } from './FabMap';


export const Maps = () => {

    const { hasLocation, initialPosition, getCurrentLocation, followUserLocation, userLocation, stopFollowUserLocation } =  useLocation();
    const mapViewRef = useRef<MapView>();
    const following = useRef<boolean>(true);

    useEffect(() => {
        followUserLocation();
        return () => {
            //TODO: Cancelar el seguimiento
            stopFollowUserLocation();
        }
    }, [])

    useEffect(() => {

        if( !following.current ) return;

        const { latitude, longitude } = userLocation;

        mapViewRef.current?.animateCamera({
            center: { latitude, longitude }
        });
    }, [ userLocation ])

    const centerPosition = async() => {

        const { latitude, longitude } = await getCurrentLocation();

        following.current = true;

        mapViewRef.current?.animateCamera({
            center: { latitude, longitude }
        });
    }

    if ( !hasLocation ) {
        return <LoadingScreen/>
    }

    return (
        <>
            <MapView
                ref = { (el) => mapViewRef.current = el! }
                style={{ flex: 1 }}
                //provider= { PROVIDER_GOOGLE }
                showsUserLocation
                initialRegion={{
                    latitude: initialPosition.latitude,
                    longitude: initialPosition.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onTouchStart={ () => following.current = false }
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

            <FabMap
                iconName="compass-outline"
                onPress={ centerPosition }
                style= {{
                    position: 'absolute',
                    bottom: 20,
                    right: 20
                }}
            />
        </>
    )
}
