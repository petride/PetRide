import React, { useEffect } from 'react'
import { Text, View, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, Keyboard, Alert, Image } from 'react-native';

import { Background } from '../components/Background'
import { WhiteLogoForgot } from '../components/WhiteLogoForgot';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { FooterImage } from '../components/FooterImage';

interface Props extends StackScreenProps<any, any> {}

export const ForgotScreen = ({ navigation } : Props) => {

    const { signIn, errorMessage, removeError } = useContext( AuthContext );


    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    });

    useEffect(() => {
        if ( errorMessage.length === 0) return;

        Alert.alert(
            'Login incorrecto', 
            errorMessage,
            [{
                text: 'OK',
                onPress: removeError
            }]    
        );

    }, [ errorMessage ]);

    const onLogin = () => {
        console.log( { email, password } );
        Keyboard.dismiss();

        signIn({ correo: email, password });
    }

    return (
        <>
            {/* Backgroud */}
            <Background/>

            <KeyboardAvoidingView
                style={{ flex: 1}}
                behavior={ (Platform.OS === 'ios') ? 'padding' : 'height'}
            >

                <View style={ loginStyles.formForgotContainer }>
                    {/** Keyboard avoid view */}
                    <WhiteLogoForgot/> 

                    <TextInput
                        placeholder="Correo"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        keyboardType="email-address"
                        style={[
                            loginStyles.inputField,
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange( value, 'email') }
                        value={ email }
                        onSubmitEditing={ onLogin }
                        autoCapitalize="none"
                        autoCorrect={ false }
                    />

                    {/* Boton login */}

                    <View style={ loginStyles.buttonContainer  }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={ loginStyles.button }
                            onPress={ onLogin }
                        >
                            <Text style={ loginStyles.buttonText }>Recuperar contraseña </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <FooterImage/>
            </KeyboardAvoidingView>
        </>
    )
}
