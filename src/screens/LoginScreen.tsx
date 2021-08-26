import React from 'react'
import { Text, View, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, Keyboard } from 'react-native'

import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation } : Props) => {

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    });

    const onLogin = () => {
        console.log( { email, password } );
        Keyboard.dismiss();
    }

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

                    {/*<Text style={ loginStyles.title }>Login</Text>

                    <Text style={ loginStyles.label }>Email</Text>*/}

                    <TextInput
                        placeholder="Correo"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="#707070"
                        style={[
                            loginStyles.inputField,
                            ( Platform.OS == 'ios' ) && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange( value, 'email') }
                        value={ email }
                        onSubmitEditing={ onLogin }
                        autoCapitalize="none"
                        autoCorrect={ false }
                    />

                    {/*<Text style={ loginStyles.label }>Contraseña</Text>*/}

                    <TextInput
                        placeholder="Contraseña"
                        placeholderTextColor="rgba(112,112,112,0.4)"
                        underlineColorAndroid="#707070"
                        secureTextEntry={ true }
                        style={[
                            loginStyles.inputField,
                            ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange( value, 'password') }
                        value={ password }
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
                            <Text style={ loginStyles.buttonText }>Entrar </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Crear una nueva cuenta */}
                    <View style={ loginStyles.newUserContainer }>
                    <TouchableOpacity
                            activeOpacity={ 0.8 }
                            onPress={ () => navigation.replace('RegisterScreen') }
                        >
                            <Text style={ loginStyles.buttonText }>Nueva Cuenta </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}
