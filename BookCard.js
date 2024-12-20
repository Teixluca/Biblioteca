import { Bookmark, BookmarkCheck } from "lucide-react-native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { router } from "expo-router";


const BookCard = ({ id, name, autor, quantidade }) => {

    return (

            // CARD TELA INICIAL CRTL+K+C para comentar no View
        <View style={styles.card}>


            <View style={styles.header}>
                <Text style={styles.title}>
                    {name}
                </Text>

                {quantidade == 0 ? <Bookmark color={'red'} size={32} />
                    : <BookmarkCheck color={'green'} size={32} />}

            </View>

            <Text style={styles.description}>{autor}</Text>
            <Text style={styles.description}>qtd: {quantidade}</Text>

                
            <Pressable onPress={() => (
                router.push({
                    pathname: "books/[id]",
                    params: { id: id }
                })
            )}>
                <Text style={styles.button}> DETALHES DO LIVRO</Text>

            </Pressable>

        </View>
    )

}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 29,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 2,
        shadowRadius: 5,
        elevation: 2,
        marginVertical: 5,
        flexDirection: 'column',

        borderColor: 'olive',
        borderWidth: 1
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },

    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black'
    },

    status: {
        fontSize: 14,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10

    },

    button: {
        backgroundColor: '#BDB76B',
        paddingVertical: 9,
        padding: 1,
        borderRadius: 6,
        alignItems: 'center',
        color: 'FFDEAD',
        fontSize: 12,
        fontWeight: 'bold',

        borderColor: 'olive',
        borderWidth: 1,

        alignContent: 'center',
        width: 130,

        shadowColor: 'lightgrey',
        shadowOpacity: 9,
        shadowRadius: 5,
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center'
    }
})

export default BookCard