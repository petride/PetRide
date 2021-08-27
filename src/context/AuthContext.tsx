import React, { createContext, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import petrideApi from '../api/petrideApi';

import { Usuario, LoginResponse, LoginData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './AuthReducer';
import { useEffect } from 'react';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status: 'checking' | 'authenticated' | 'no-authenticated';
    signUp: () => void;
    signIn: ( loginData: LoginData ) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInitialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children}: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState);

    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async() => {
        const token = await AsyncStorage.getItem('token');
        //No token no autenticado
        if ( !token ) return dispatch({ type: 'notAuthenticated'});
        //Token
        const resp = await petrideApi.get('/auth');

        if( resp.status !== 200) {
           return dispatch({ type: 'notAuthenticated' });
        }

        await AsyncStorage.setItem('token', resp.data.token);

        dispatch({
            type: 'signUp',
            payload: {
                token: resp.data.token,
                user: resp.data.usuario
            }
        });
    }

    const signIn = async({ correo, password }: LoginData) => {
        try {

            const { data } = await petrideApi.post<LoginResponse> ('/auth/login', { correo, password } );
            dispatch({
                type: 'signUp',
                payload: {
                    token: data.token,
                    user: data.usuario
                }
            });

            await AsyncStorage.setItem('token', data.token);
            
        } catch (error) {
            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Información incorrecta'
            });
        }
    };

    const removeError = () => {
        dispatch({
            type: 'removeError'
        });
    };

    const logOut = async() => {
        await AsyncStorage.removeItem('token');
        dispatch({
            type: 'logout'
        });
    }

    const signUp = () => {}
    
    

    return (
         <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError,
         }}
         >
             { children }
         </AuthContext.Provider>
    )
}