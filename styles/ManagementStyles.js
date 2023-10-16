import { StyleSheet } from 'react-native'

const ManagementStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 16,
        backgroundColor: '#eef6f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    addBlogContainer:{
        backgroundColor: '#173d56',
        padding: 8,
        borderRadius: 4,
        marginBottom: 16,
    },
    addBlogContent:{
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
    },
    itemContainer:{
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#173d56',
        elevation: 8,
        backgroundColor: 'white',
        marginBottom: 20,
    },
    itemImage:{
        width: 100,
        height: 100,
        borderWidth: 1,
        borderColor: '#173d56',
        margin: 8,
    },
    itemContent:{
        marginTop: 8,
    },
    itemTitle:{
        color: 'black',
        fontSize: 20,
        fontWeight: '700',
    },
    itemDescription:{
        
    },
})

export default ManagementStyles