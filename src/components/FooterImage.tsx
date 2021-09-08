import React from 'react'
import { Image, View } from 'react-native';

export const FooterImage = () => {
    return (
        <View 
            style={{
                alignItems: 'center'
            }}
        >
            <Image
                source={ require('../assets/cenefa.png') }
                style={{
                    width: 768,
                    height: 33,
                }}
            />
            
        </View>
    )
}