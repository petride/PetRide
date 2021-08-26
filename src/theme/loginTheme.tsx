import { StyleSheet } from 'react-native';

export const loginStyles = StyleSheet.create({

    formLoginContainer: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20
    },
    label: {
        marginTop: 25,
        color: 'white',
        fontWeight: 'bold'
    },
    inputField: {
        color: '#707070',
        fontSize: 20,
        //backgroundColor: '#A6D8F6',
        backgroundColor: 'white',
        marginBottom: 20,
        marginTop: 10
    },
    inputFieldIOS: {
        borderBottomColor: '#707070',
        borderBottomWidth: 2,
        paddingBottom: 4
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    button: {
        borderWidth: 2,
        borderColor: '#F8D93C',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 5,
        backgroundColor: '#F8D93C',
    },
    buttonText: {
        fontSize: 18,
        color: 'black'
    },
    newUserContainer: {
        alignItems: 'flex-end',
        marginTop:10,
    },
    buttonReturnLogin: {
        position: 'absolute',
        top: 50,
        left: 20,
        borderWidth: 1,
        borderColor: '#F8D93C',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 100
    }

});