import React from 'react'
import { ImageBackground, ImageBackgroundBase, View } from 'react-native';

export const Background = () => {
    return (
        <View
            style={{
                position: 'absolute',
                //backgroundColor: '#A6D8F6',
                backgroundColor: '#FFF',
                width: 1000,
                height: 1200
            }}
        >
            {/*<ImageBackground 
                source={ require('../assets/huellas1.png') }
                resizeMode="cover"
                style={{
                    flex: 1,
                    justifyContent: "center"
                }}
            />*/}
            
        </View>
    )
}
