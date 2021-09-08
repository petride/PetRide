import React from 'react'
import { Image, View } from 'react-native';

export const ImageRegister = () => {
    return (
        <View 
            style={{
                alignItems:'center'
            }}
        >
            <Image
                source={ require('../assets/image_register.png') }
                style={{
                    width: 230,
                    height: 230,
                    marginBottom: 20
                }}
            />
            
        </View>
    )
}