import { router } from "expo-router"

import { useEffect, useState } from "react";
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { getRequestId } from "../../Api";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import { Bluetooth, CircleCheck } from "lucide-react-native";


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

                <View style={styles.card}>
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
                    <Button
                        title='Alugar'
                        color='lightblue'
                        // falta colocar a funcao para diminuir a quantidade
                        onPress={() => livro.quantidade = livro.quaitidade--} />

                    <Button
                        title='Devolver'
                        color='lightblue'

                        onPress={() => livro.quantidade++}
                        // fata colocar a quantidade
                        />

                    

                </View>

                <View style={styles.card}>
                    <Text>Id: {livro.id}</Text>
                    <Text style={styles.description}>Id: <Text style={styles.title}>{livro.id}</Text></Text>
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
                        <Text style={styles.botaoVoltar} > Voltar </Text>

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
        marginVertical: 5
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
        fontSize: 17,
        borderWidth: 1,
        borderRadius: 8,
        fontWeight: 'bold',
        color: 'green',
        backgroundColor: 'lightblue',
        width: 66,
        height: 30,
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