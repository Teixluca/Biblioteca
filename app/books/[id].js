import { router } from "expo-router"

import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native"
import { getRequestId } from "../../Api";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";


export default function BookPage() {

    const { id } = useLocalSearchParams()
    console.log("Book page",id)
    const [livro, setLivro] = useState({});


    useEffect(() => {
        async function fetchData() {
            try {
                console.log(id)
                const resp = await getRequestId(id);
                setLivro(resp);
                console.log(resp)

            } catch (ex) {
                console.error(ex);
            }
        }

        fetchData();

    }, [])

    return (
        <View style={styles.container}>


            <View style={styles.card}>

                <Text style={styles.description}>{livro.id}</Text>
                <Text style={styles.description}>{livro.nome}</Text>
                <Text style={styles.description}>{livro.autor}</Text>
                <Text style={styles.description}>{livro.quantidade}</Text>

            </View>




            <View>
                <Pressable onPress={() => (
                    router.push({
                        pathname: "",
                    })
                )}>
                    <Text> Voltar </Text>

                </Pressable>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },

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
    description: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10

    },
})