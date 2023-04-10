import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        margin: 3,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    viewImg: {
        width: '30%',
        height: 150,
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    viewData:{
        padding: 10,
        width: '70%',
        height: '100%',
        backgroundColor: '#00008b',
        borderRadius: 10
    },
    classe:{
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5
    },
    nome: {
        fontSize: 18,
        color: 'white',
        marginBottom: 5
    },
    ataque: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5
    },
    defesa: {
        fontSize: 14,
        color: 'white',
        marginBottom: 5
    },
    descricao:{
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 2
    },
    btn: {
        padding: 10
    }
}); 
export default styles;