import { router } from "expo-router"

import { useEffect, useState } from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { getRequestId } from "../../Api";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import { CircleCheck } from "lucide-react-native";


export default function BookPage() {

    const [clienteNome, setNome] = useState("");
    const [clienteEmail, setEmail] = useState("");

    const { id } = useLocalSearchParams();
    console.log("Book page", id);
    const [livro, setLivro] = useState({});


    useEffect(() => {
        async function fetchData() {
            try {
                console.log(id)
                const resp = await getRequestId(id);
                setLivro(resp);
                console.log(resp);

            } catch (ex) {
                console.error(ex);
            }
        }

        fetchData();

    }, [id])

    return (
        <ScrollView>
            <View style={styles.container}>


                <TextInput
                    style={styles.input}
                    placeholder='Nome completo'
                    value={clienteNome}
                    onChangeText={setNome}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={clienteEmail}
                    onChangeText={setEmail}
                />


                <View style={styles.card}>
                    <Text>Id: {livro.id}</Text>
                    <Text style={styles.description}><Text style={styles.title}>{livro.name}</Text></Text>
                    <Text style={styles.description}>Autor: <Text style={styles.title}>{livro.autor}</Text></Text>
                    <Text style={styles.description}>Lançamento: <Text style={styles.title}>{livro.ano}</Text></Text>

                    <Image
                        source={{
                            uri: `${livro.imagemUrl}`
                        }}
                        style={{ width: 200, height: 300, borderRadius: 5, border: "black" }}
                    />
                    <Text style={styles.description}>Quantidade: <Text style={styles.title}>{livro.quantidade}</Text></Text>


                </View>


                <View style={styles.botaoVoltar} >

                    <Pressable onPress={() => (
                        router.push({
                            pathname: "/",
                        })
                    )}>
                        <Text> Voltar </Text>

                    </Pressable>

                </View>


            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#eaeaea'
    },

    card: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginVertical: 0.1
    },
    description: {
        fontSize: 12,
        color: '#666',
        marginBottom: 10


    },

    title: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#333'
    },

    botaoVoltar: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
        justifyContent: 'flex-end'

    },
    label: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 8
    },
    input: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 8,
        padding: 12,
        fontSize: 12,
        marginBottom: 16
    },
    textArea: {
        height: 150,
        textAlignVertical: 'top'
    },
})