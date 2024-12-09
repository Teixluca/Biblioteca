import { router } from "expo-router"

import { useEffect, useState } from "react";
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import { getRequestId, postRequest, postRequestDevolve } from "../../Api";
import { useLocalSearchParams, useSearchParams } from "expo-router/build/hooks";
import { Bluetooth, CircleCheck } from "lucide-react-native";


export default function BookPage() {

    const [clienteNome, setNome] = useState("");
    const [clienteEmail, setEmail] = useState("");

    const [alert1, setAlert1] = useState(false);
    const [alert2, setAlert2] = useState(false);

    const { id } = useLocalSearchParams();

    const [livro, setLivro] = useState({});


    // Não faço ideia mas precisa pra mostrar o livro
    useEffect(() => {
        async function fetchData() {
            try {

                const resp = await getRequestId(id);
                setLivro(resp);
                console.log(resp);

            } catch (ex) {
                console.error(ex);
            }
        }

        fetchData();

    }, [id])




    // funcao para alugar livro (API)
    const Alugar = async () => {
        try {
            const response = await postRequest(id); // chama API pra alugar
        } catch (error) {
            console.error(error);
        }
    };



    // funcao para devolver livro (API)
    const Devolver = async () => {
        try {
            const response = await postRequestDevolve(id); // chama API pra devolver            console.log("Livro alugado com sucesso:", response);
        } catch (error) {
            console.error(error);
        }
    };



    // mensagem de quando aluga o livro

    const onMessage = () => {

        if (Alugar()) {
            setAlert2(true)
            setTimeout(() => {
                setAlert2(false);
            }, 4000);
        }
        if (Devolver()) {

            setAlert1(true)
            setTimeout(() => {
                setAlert1(false);
            }, 4000);
        }
    }



    // acoes do botao de alugar

    const botaoAlugar = () => {

        onMessage()
        Alugar()
    }


    const botaoDevolver = () => {

        onMessage()
        Devolver()
    }


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
                        color='blue'

                        onPress={() => botaoAlugar()}


                    />

                    {alert1 ? <Text style={styles.errorText}>
                        Livro Alugado para {clienteNome}
                    </Text>
                        : <></>}





                    <Button
                        title='Devolver'
                        color='lightblue'
                        onPress={() => botaoDevolver()}
                    // fata colocar a quantidade
                    />

                    {alert2 ? <Text style={styles.errorText}>
                        Livro Devovido por {clienteNome}
                    </Text>
                        : <></>}



                </View>


                <View style={styles.card}>

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
        flex: 22,
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

    errorText: {
        color: "darkgreen",
        fontSize: 12,
        fontStyle: "italic"
    },
})