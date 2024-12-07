import { BookmarkCheck } from "lucide-react-native";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { router } from "expo-router";

const BookCard = ({ id, name, autor, quantidade, status }) => {
        
    return (
            
        
        <View style={styles.card}>
            <View style={styles.header}>
                <Text style={styles.title}>
                    {name}
                </Text>
                <BookmarkCheck   color={'green'} size={32} />
            </View>

            <Text style={styles.description}>{autor}</Text>
            <Text style={styles.description}>{quantidade}</Text>

            <Pressable onPress={() => (
                router.push({
                    pathname: "books/[id]",
                    params: { id: id }
                })
            )}>
                <Text style={styles.button}> DETALHES</Text>

            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 6,
        marginVertical: 5
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
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
        backgroundColor: '#d33f49',
        paddingVertical: 5,
        padding: 1,
        borderRadius: 6,
        alignItems: 'center',
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        alignItems: 'center'
    }
})

export default BookCard