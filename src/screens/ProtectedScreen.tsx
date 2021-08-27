import React, { useContext } from 'react'
import { Button, StyleSheet } from 'react-native'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';

export const ProtectedScreen = () => {

    const { user, token, logOut } = useContext(AuthContext);
    return (
        <View style={ styles.container}>
            <Text style={ styles.title}> Protected Screen</Text>

            <Button
                title="logout"
                color="#F8D93C"
                onPress={ logOut }
            />

            <Text>
                { JSON.stringify( user, null, 5 ) }
            </Text>
            <Text>
                { token }
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginBottom: 20
    }
});