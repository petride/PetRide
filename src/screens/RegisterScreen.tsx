import React, { useContext } from 'react'
import { Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';

import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';
import { useEffect } from 'react';
import { FooterImage } from '../components/FooterImage';
import { ImageRegister } from '../components/ImageRegister';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({ navigation } : Props ) => {

    const { signUp, errorMessage, removeError } = useContext(AuthContext);

    const { email, password, name, lastName, phone, onChange } = useForm({
        name: '',
        email: '',
        password: '',
        lastName: '',
        phone: ''
    });

    useEffect(() => {
        if ( errorMessage.length === 0) return;

        Alert.alert(
            'Registro incorrecto', 
            errorMessage,
            [{
                text: 'OK',
                onPress: removeError
            }]    
        );

    }, [ errorMessage ]);

    const onRegister = () => {
        console.log( { name, email, password } );
        Keyboard.dismiss();
        signUp({
            nombre: name,
            password,
            correo: email
        });
    }


    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1, backgroundColor: '#FFF' }}
                behavior={ ( Platform.OS === 'ios') ? 'padding' : 'height'}
            >

                <View style={ loginStyles.formLoginContainer }>
                    {/** Keyboard avoid view */}
                    <ImageRegister/> 

                    <TextInput
                        placeholder="Nombre"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        style={[
                            loginStyles.inputField
                        ]}
                        selectionColor="white"
                        onChangeText={ (value) => onChange( value, 'name') }
                        value={ name }
                        onSubmitEditing={ onRegister }
                        autoCapitalize="words"
                        autoCorrect={ false }
                    />

                    <TextInput
                        placeholder="Apellidos"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        style={[
                            loginStyles.inputField
                        ]}
                        selectionColor="white"
                        onChangeText={ (value) => onChange( value, 'lastName') }
                        value={ lastName }
                        onSubmitEditing={ onRegister }
                        autoCapitalize="words"
                        autoCorrect={ false }
                    />

                    <TextInput
                        placeholder="Número Telefónico"
                        keyboardType="phone-pad"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        style={[
                            loginStyles.inputField
                        ]}
                        selectionColor="white"
                        onChangeText={ (value) => onChange( value, 'phone') }
                        value={ phone }
                        onSubmitEditing={ onRegister }
                        autoCorrect={ false }
                    />

                    <TextInput
                        placeholder="Correo"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        keyboardType="email-address"
                        style={[
                            loginStyles.inputField
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange( value, 'email') }
                        value={ email }
                        onSubmitEditing={ onRegister }
                        autoCapitalize="none"
                        autoCorrect={ false }
                    />

                    <TextInput
                        placeholder="Contraseña"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        secureTextEntry={ true }
                        style={[
                            loginStyles.inputField
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange( value, 'password') }
                        value={ password }
                        onSubmitEditing={ onRegister }
                        autoCapitalize="none"
                        autoCorrect={ false }
                    />

                    {/* Boton Crear Cuenta */}

                    <View style={ loginStyles.buttonContainer  }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={ loginStyles.button }
                            onPress={ onRegister }
                        >
                            <Text style={ loginStyles.buttonText }>Crear cuenta</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <FooterImage/>
            </KeyboardAvoidingView>
        </>
    )
}