import React, { createContext, useReducer } from 'react';
import { Usuario, LoginResponse, LoginData } from '../interfaces/appInterfaces';
import { authReducer, AuthState } from './AuthReducer';
import petrideApi from '../api/petrideApi';

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
            
        } catch (error) {
            console.log(error.response.data.msg);
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

    const signUp = () => {}
    const logOut = () => {}
    

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