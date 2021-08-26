import React from 'react'
import { Text, View, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView } from 'react-native'

import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme';

export const LoginScreen = () => {
    return (
        <>
            {/* Backgroud */}
            <Background/>

            <KeyboardAvoidingView
                style={{ flex: 1}}
                behavior={ (Platform.OS === 'ios') ? 'padding' : 'height'}
            >

                <View style={ loginStyles.formLoginContainer }>
                    {/** Keyboard avoid view */}
                    <WhiteLogo/> 

                    <Text style={ loginStyles.title }>Login</Text>

                    <Text style={ loginStyles.label }>Email</Text>

                    <TextInput
                        placeholder="Correo"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[
                            loginStyles.inputField,
                            ( Platform.OS == 'ios' ) && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        //TODO: onchange, value

                        autoCapitalize="none"
                        autoCorrect={ false }
                    />

                    <Text style={ loginStyles.label }>Contraseña</Text>

                    <TextInput
                        placeholder="Contraseña"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        style={[
                            loginStyles.inputField,
                            ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        //TODO: onchange, value

                        autoCapitalize="none"
                        autoCorrect={ false }
                    />

                    {/* Boton login */}

                    <View style={ loginStyles.buttonContainer  }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={ loginStyles.button }
                        >
                            <Text style={ loginStyles.buttonText }>Login </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Crear una nueva cuenta */}
                    <View style={ loginStyles.newUserContainer }>
                    <TouchableOpacity
                            activeOpacity={ 0.8 }
                            onPress={ () => console.log('pres') }
                        >
                            <Text style={ loginStyles.buttonText }>Nueva Cuenta </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}
