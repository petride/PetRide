import { StyleSheet } from 'react-native';

export const ModalStyles = StyleSheet.create({

    backgroundModal: {
        flex:1,
        backgroundColor: "rgba(1,1,1, 0.5)",
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewModal:{
        height: '20%',
        width: '80%',
        backgroundColor: '#FFF',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10
    },
    iconModalContainer:{
        width:90,
        height:90,
        flexDirection: 'row',
        borderRadius:90,
        backgroundColor:'white',
        zIndex:10,
        position:'absolute',
        top: -60,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
        
    },
    imageIcon:{
        width:70,
        height:70
    },
    title: {
        width: 250,
        fontSize: 20,
        textAlign: 'center',
        fontWeight: "bold"
    },
    description: {
        width: 250,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    },
    bottomButtonModalContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        top: -35,
        borderRadius: 10
    },
    buttonModalContainer:{
        width: '50%',
        borderBottomStartRadius: 10
    },
    buttonRedModal:{
        borderWidth: 2,
        borderColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 5,
        //borderRadius: 5,
        backgroundColor: 'red',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 10
    },
    buttonRedText: {
        fontSize: 18,
        color: 'white'
    },
    buttonBlueModal:{
        borderWidth: 2,
        borderColor: '#A6D8F6',
        paddingHorizontal: 20,
        paddingVertical: 5,
        //borderRadius: 5,
        backgroundColor: '#A6D8F6',
        alignContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 10
    },
    buttonBlueText: {
        fontSize: 18,
        color: 'black'
    },


    viewModalNewTravel:{
        height: '20%',
        width: '90%',
        backgroundColor: '#FFF',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 10,
        top: '28%'
    },
    titleContainerNewTravel:{
        width:'100%',
        height:50,
        flexDirection: 'row',
        backgroundColor:'#A6D8F6',
        zIndex:10,
        position:'absolute',
        top: -30,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10
    },
    titleNewTravel: {
        width: 250,
        fontSize: 30,
        textAlign: 'center',
        //fontWeight: "bold",
        color: 'white'
    },
    contentDescriptionNewTravel: {
        flex:1,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: "white",
        alignItems: 'center',
        borderRadius: 10
    },
    contentDescriptionNewTravelLeft: {
        width: '60%',
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center'
    },
    contentDescriptionNewTravelRight: {
        width: '40%',
        backgroundColor: 'white',
        alignContent: 'center',
        alignItems: 'center'
    },
    bottomTravelButtonModalContainer:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 10,
    },
    buttonRedTravelModal:{
        marginTop: 10,
        borderWidth: 2,
        borderColor: 'red',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 5,
        backgroundColor: 'red',
        alignContent: 'center',
        alignItems: 'center'
    },
    buttonBlueTravelModal:{
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#A6D8F6',
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 5,
        backgroundColor: '#A6D8F6',
        alignContent: 'center',
        alignItems: 'center'
    },
    userTravel: {
        width: 250,
        fontSize: 18,
        textAlign: 'center',
    },
    descriptionTravel: {
        width: 250,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    },
});