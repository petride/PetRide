import React, { useEffect } from 'react'
import { Text, View, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, Keyboard, Alert, Image, ImageBackground, StyleSheet } from 'react-native';

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


    // const { email, password, onChange } = useForm({
    //     email: '',
    //     password: ''
    // });

    // useEffect(() => {
    //     if ( errorMessage.length === 0) return;

    //     Alert.alert(
    //         'Login incorrecto', 
    //         errorMessage,
    //         [{
    //             text: 'OK',
    //             onPress: removeError
    //         }]    
    //     );

    // }, [ errorMessage ]);

    // const onLogin = () => {
    //     console.log( { email, password } );
    //     Keyboard.dismiss();

    //     signIn({ correo: email, password });
    // }

    return (


        <View style={styles.loginContainer}>
            <ImageBackground source={require('../images/Fondo.jpg')} resizeMode="cover" style={styles.imageBackground}>
                <Image source={require('../images/logoPetride.png')} style={styles.logo}></Image>
                <Text style={styles.typeApp}>Recuperar contrasena</Text>
                
                <TextInput
                    style={styles.input}
                    // onChangeText={ (value) => onChange( value, 'email') }
                    // value={ email }
                    // onSubmitEditing={ onLogin }
                    autoCapitalize="none"
                    autoCorrect={ false }
                    placeholder="correo"
                    keyboardType="email-address"
                />

                <View style={styles.buttonsFormContainer}>

                    <TouchableOpacity  style={styles.btnForm}>
                        <Text style={{fontSize:15, fontWeight:'bold'}}>Enviar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> navigation.goBack()} style={{...styles.btnForm, backgroundColor:'#A0001A'}}>
                        <Text style={{color:'white', fontSize:15, fontWeight:'bold'}}>Cancelar</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>



        // <>
        //     {/* Backgroud */}
        //     <Background/>

        //     <KeyboardAvoidingView
        //         style={{ flex: 1}}
        //         behavior={ (Platform.OS === 'ios') ? 'padding' : 'height'}
        //     >

        //         <View style={ loginStyles.formForgotContainer }>
        //             {/** Keyboard avoid view */}
        //             <WhiteLogoForgot/> 

        //             <TextInput
        //                 placeholder="Correo"
        //                 placeholderTextColor="rgba(72,72,72,0.4)"
        //                 keyboardType="email-address"
        //                 style={[
        //                     loginStyles.inputField,
        //                 ]}
        //                 selectionColor="white"

        //                 onChangeText={ (value) => onChange( value, 'email') }
        //                 value={ email }
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
        //                     <Text style={ loginStyles.buttonText }>Recuperar contraseña </Text>
        //                 </TouchableOpacity>
        //             </View>
        //         </View>
                
        //         <FooterImage/>
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
        height:40,
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
    },


    buttonsFormContainer:{
        flexDirection:'row-reverse',
        justifyContent:'center',
        marginBottom:80
    },

    btnForm:{
        width:150,
        height:50,
        backgroundColor:'#F8D93C',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10,
        borderRadius:10,
    }


})
