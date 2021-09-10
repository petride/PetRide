import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';


export const Test = ( props:any ) => {


    //console.log('PROPS HOME: ', props)

    return (
        <View>
            <Text>
                <Icon name="airplane-outline" size={30} color="#900" />;
            </Text>
        </View>
    )
}
