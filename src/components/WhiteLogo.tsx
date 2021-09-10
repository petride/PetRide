import React from 'react'
import { Image, View } from 'react-native';

export const WhiteLogo = () => {
    return (
        <View 
            style={{
                alignItems:'center'
            }}
        >
            <Image
                source={ require('../assets/logo_petride.png') }
                style={{
                    width: 230,
                    height: 230,
                    marginBottom: 20
                }}
            />
            
        </View>
    )
}