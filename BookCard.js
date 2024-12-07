import { CircleCheck } from "lucide-react-native";
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
                <CircleCheck color={'green'} size={32} />
            </View>

            <Text style={styles.description}>{autor}</Text>
            <Text style={styles.description}>{quantidade}</Text>

            <Pressable onPress={() => (
                router.push({
                    pathname: "books/[id]",
                    params: { id: id }
                })
            )}>
                <Text style={styles.button}> Alugar</Text>

            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginVertical: 10
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
        paddingVertical: 10,
        borderRadius: 6,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default BookCard