import { StyleSheet } from 'react-native';

export const permissionsStyles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        width: 250,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    },

    blackButton: {
        height: 45,
        width: 200,
        backgroundColor: '#F8D93C',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        elevation: 6
    },
    buttonText: {
        color: '#484848',
        fontSize: 18
    }

});