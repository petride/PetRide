import React from 'react'
import { View } from 'react-native';
import { Maps } from '../components/Maps';

export const MapScreen = ( props:any ) => {
    return (
        <View style={{ flex: 1}}>
            <Maps />
        </View>
    )
}
