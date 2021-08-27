import React, { useContext } from 'react'
import { Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';

import { loginStyles } from '../theme/loginTheme';
import { WhiteLogo } from '../components/WhiteLogo';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../context/AuthContext';
import { useEffect } from 'react';

interface Props extends StackScreenProps<any, any> {}

export const RegisterScreen = ({ navigation } : Props ) => {

    const { signUp, errorMessage, removeError } = useContext(AuthContext);

    const { email, password, name, onChange } = useForm({
        name: '',
        email: '',
        password: ''
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
                style={{ flex: 1, backgroundColor: '#A6D8F6' }}
                behavior={ ( Platform.OS === 'ios') ? 'padding' : 'height'}
            >

                <View style={ loginStyles.formLoginContainer }>
                    {/** Keyboard avoid view */}
                    <WhiteLogo/> 

                    {/*<Text style={ loginStyles.title }>Registro</Text>

                    <Text style={ loginStyles.label }>Nombre</Text>*/}

                    <TextInput
                        placeholder="Nombre"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    {/*<TextInput
                        placeholder="Apellido Paterno"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Apellido Materno"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Fecha Nacimiento"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
                        style={[
                            loginStyles.inputField,
                            ( Platform.OS == 'ios' ) && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"
                        onChangeText={ (value) => onChange( value, 'name') }
                        value={ name }
                        onSubmitEditing={ onRegister }
                        autoCapitalize="none"
                        autoCorrect={ false }
                    />*/}

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
                        onSubmitEditing={ onRegister }
                        autoCapitalize="none"
                        autoCorrect={ false }
                    />

                    <TextInput
                        placeholder="Contraseña"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    {/*<TextInput
                        placeholder="Sexo"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Domicilio"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Colonia"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Codigo Postal"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Estado"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Celular"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Estado Civil"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Nivel de Estudios"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Situacion Laboral"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Foto Identificacion"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Foto Seguro Cobertura"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Foto Constancia Fiscal"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Foto Perfil"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="No Cuenta"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="CLABE"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="CER"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="KEY"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Tipo Automovil"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Placas"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Color Automovil"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Poliza Seguro"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Vigencia Seguro"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Licencia Conducir"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Vigencia Licencia"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Tipo Transportadora"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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

                    <TextInput
                        placeholder="Placas Transportadora"
                        placeholderTextColor="rgba(72,72,72,0.4)"
                        underlineColorAndroid="#707070"
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
                    />*/}

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