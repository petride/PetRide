import React from 'react'
import { Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard } from 'react-native';

import { loginStyles } from '../theme/loginTheme';
import { WhiteLogo } from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({ navigation } : Props ) => {

    const { email, password, name, onChange } = useForm({
        name: '',
        email: '',
        password: ''
    });

    const onRegister = () => {
        console.log( { name, email, password } );
        Keyboard.dismiss();
    }


    return (
        <>
            <KeyboardAvoidingView
                style={{ flex: 1, backgroundColor: '#A6D8F6' }}
                behavior={ ( Platform.OS === 'ios') ? 'padding' : 'height'}
            >

                <View style={ loginStyles.formLoginContainer }>
                    {/** Keyboard avoid view */}
                    <WhiteLogo/> 

                    <Text style={ loginStyles.title }>Registro</Text>

                    <Text style={ loginStyles.label }>Nombre</Text>

                    <TextInput
                        placeholder="Nombre"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        style={[
                            loginStyles.inputField,
                            ( Platform.OS == 'ios' ) && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"
                        onChangeText={ (value) => onChange( value, 'name') }
                        value={ name }
                        onSubmitEditing={ onRegister }
                        autoCapitalize="words"
                        autoCorrect={ false }
                    />

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

                        onChangeText={ (value) => onChange( value, 'email') }
                        value={ email }
                        onSubmitEditing={ onRegister }
                        autoCapitalize="none"
                        autoCorrect={ false }
                    />

                    <Text style={ loginStyles.label }>Contraseña</Text>

                    <TextInput
                        placeholder="Contraseña"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        secureTextEntry={ true }
                        style={[
                            loginStyles.inputField,
                            ( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"

                        onChangeText={ (value) => onChange( value, 'password') }
                        value={ password }
                        onSubmitEditing={ onRegister }
                        autoCapitalize="none"
                        autoCorrect={ false }
                    />

                    {/* Boton login */}

                    <View style={ loginStyles.buttonContainer  }>
                        <TouchableOpacity
                            activeOpacity={ 0.8 }
                            style={ loginStyles.button }
                            onPress={ onRegister }
                        >
                            <Text style={ loginStyles.buttonText }>Crear cuenta </Text>
                        </TouchableOpacity>
                    </View>

                    {/* Crear una nueva cuenta */}
                    {/*<View style={ loginStyles.newUserContainer }>
                    <TouchableOpacity
                            activeOpacity={ 0.8 }
                            onPress={ () => navigation.replace('LoginScreen') }
                        >
                            <Text style={ loginStyles.buttonText }>Ingresar </Text>
                        </TouchableOpacity>
                    </View>*/}
                    <TouchableOpacity
                        activeOpacity={ 0.8 }
                        onPress={ () => navigation.replace('LoginScreen') }
                        style={ loginStyles.buttonReturnLogin }
                    >
                        <Text style={ loginStyles.buttonText }>Login </Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}