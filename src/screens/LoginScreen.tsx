import React, { useEffect } from 'react'
import { Text, View, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, Keyboard, Alert, ImageBackground, Image, StyleSheet } from 'react-native'

import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<any, any> {}

export const LoginScreen = ({ navigation } : Props) => {

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

        <View style={styles.loginContainer}>
            <ImageBackground source={require('../images/Fondo.jpg')} resizeMode="cover" style={styles.imageBackground}>
                <Image source={require('../images/logoPetride.png')} style={styles.logo}></Image>
                <Text style={styles.typeApp}>CONDUCTOR</Text>
                
                <TextInput
                    style={styles.input}
                    onChangeText={ (value) => onChange( value, 'email') }
                    value={ email }
                    onSubmitEditing={ onLogin }
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder="correo"
                    keyboardType="email-address"
                />

                <TextInput
                    style={styles.input}
                    onChangeText={ (value) => onChange( value, 'password') }
                    value={ password }
                    onSubmitEditing={ onLogin }
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder="contraseña"
                    keyboardType='ascii-capable'
                    secureTextEntry={true}
                />

                <TouchableOpacity onPress={ onLogin } activeOpacity={0.9} style={styles.btnEntrar}>
                    <Text style={styles.textEntrar}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => navigation.navigate('RegisterScreen') } activeOpacity={0.9} style={styles.buttonRegistrar}>
                    <Text style={styles.textButtonRegistrar}>Registrate</Text>
                </TouchableOpacity>

                <TouchableOpacity >
                    <Text style={styles.textOlvidoPass} onPress={ () => navigation.navigate('ForgotScreen') }>¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>





        // <>
        //     {/* Backgroud */}
        //     <Background/>

        //     <KeyboardAvoidingView
        //         style={{ flex: 1}}
        //         behavior={ (Platform.OS === 'ios') ? 'padding' : 'height'}
        //     >

        //         <View style={ loginStyles.formLoginContainer }>
        //             {/** Keyboard avoid view */}
        //             <WhiteLogo/> 

        //             {/*<Text style={ loginStyles.title }>Login</Text>

        //             <Text style={ loginStyles.label }>Email</Text>*/}

        //             <TextInput
        //                 placeholder="Correo"
        //                 placeholderTextColor="rgba(72,72,72,0.4)"
        //                 keyboardType="email-address"
        //                 //underlineColorAndroid="#707070"
        //                 style={[
        //                     loginStyles.inputField,
        //                     //( Platform.OS == 'ios' ) && loginStyles.inputFieldIOS,
        //                 ]}
        //                 selectionColor="white"
        //                 onChangeText={ (value) => onChange( value, 'email') }
        //                 value={ email }
        //                 onSubmitEditing={ onLogin }
        //                 autoCapitalize="none"
        //                 autoCorrect={ false }
        //             />

        //             {/*<Text style={ loginStyles.label }>Contraseña</Text>*/}

        //             <TextInput
        //                 placeholder="Contraseña"
        //                 placeholderTextColor="rgba(112,112,112,0.4)"
        //                 //underlineColorAndroid="#707070"
        //                 secureTextEntry={ true }
        //                 style={[
        //                     loginStyles.inputField,
        //                     //( Platform.OS === 'ios' ) && loginStyles.inputFieldIOS
        //                 ]}
        //                 selectionColor="white"
        //                 onChangeText={ (value) => onChange( value, 'password') }
        //                 value={ password }
        //                 onSubmitEditing={ onLogin }
        //                 autoCapitalize="none"
        //                 autoCorrect={ false }
        //             />

        //             {/* Boton login */}

        //             <View style={ loginStyles.buttonContainer  }>
        //                 <TouchableOpacity
        //                     activeOpacity={ 0.8 }
        //                     style={ loginStyles.button }
        //                     onPress={ onLogin }
        //                 >
        //                     <Text style={ loginStyles.buttonText }>Iniciar Sesión </Text>
        //                 </TouchableOpacity>
        //             </View>

                    
        //             <View style={ loginStyles.toolsUserContainer }>
        //                 {/* Olvide contraseña */}
        //                 <TouchableOpacity
        //                     activeOpacity={ 0.8 }
        //                     //onPress={ () => navigation.replace('ForgotScreen') }
        //                     onPress={ () => navigation.navigate('ForgotScreen') }
        //                 >
        //                     <Text style={ loginStyles.textToolsUserContainer }>¿Olvidaste tu contraseña?</Text>
        //                 </TouchableOpacity>

        //                 {/* Crear una nueva cuenta */}
        //                 <TouchableOpacity
        //                     activeOpacity={ 0.8 }
        //                     onPress={ () => navigation.navigate('RegisterScreen') }
        //                     style={{ marginTop: 10 }}
        //                 >
        //                     <Text style={ loginStyles.textToolsUserContainer }>¿No tienes una cuenta? Registrate Aquí</Text>
        //                 </TouchableOpacity>
        //             </View>
        //         </View>
                
        //     </KeyboardAvoidingView>
        // </>
    )
}

const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        backgroundColor:'white'
    },

    imageBackground: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        
    },

    logo:{
        width:200,
        height:200,
        top:-30
    },

    typeApp:{
        fontWeight:'bold',
        fontSize:25
    },

    input:{
        
        fontSize:12,
        padding:0,
        paddingLeft:5,
        width:'80%',
        height:30,
        backgroundColor:'#d2ebfa',
        marginVertical:10,
        borderRadius:5

    },

    btnEntrar:{
        width:300,
        height:40,
        marginVertical:20,
        backgroundColor:'#F8D93C',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },

    textEntrar:{
        fontSize:30,
        color:'#707070',
    },

    buttonRegistrar:{
        width:300,
        marginBottom:20,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },

    textButtonRegistrar:{
        fontSize:15,
        fontWeight:'bold',
        color:'black'
    },

    textOlvidoPass:{
        fontSize:15,
        fontWeight:'bold'
    }


})
