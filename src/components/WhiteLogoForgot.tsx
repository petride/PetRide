import React from 'react'
import { Image, Text, View, StyleSheet } from 'react-native';
import { loginStyles } from '../theme/loginTheme';

export const WhiteLogoForgot = () => {
    return (
        <View 
            style={[
                loginStyles.imageForgotContainer,
                loginStyles.shadowProp
            ]}
        >
            <Image
                source={ require('../assets/logo_petride.png') }
                style={{
                    width: 120,
                    height: 120
                }}
            />

            <Text style={ loginStyles.titleForgotPassword }>Restablecer Contraseña</Text>
            
        </View>
    )
}