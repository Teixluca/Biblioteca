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
    const [estoqueMenor, setEstoqueMenor] = useState(false);

    const [alert2, setAlert2] = useState(false);
    const [estoqueMaior, setEstoqueMaior] = useState(false);

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
    ////////////////////////////



    // funcao para alugar livro (API)
    const Alugar = async () => {
        try {

            const response = await postRequest(id); // chama API pra alugar

        } catch (error) {

            console.error(error);
        }
    };
    ////////////////////////////



    // funcao para devolver livro (API)
    const Devolver = async () => {
        try {
            const response = await postRequestDevolve(id);

            
            // chama API pra devolver 
        } catch (error) {
            console.error(error);
        }
    };
    ////////////////////////////



    // mensagem de quando aluga o livro

    const onMessage = () => {

        if (livro.quantidade <= livro.estoque && livro.quantidade > 0) {
            setAlert1(true)
            setTimeout(() => {
                setAlert1(false);
            }, 2000);

            Alugar();
        }

        else {

            setEstoqueMenor(true)
            setTimeout(() => {
                setEstoqueMenor(false);
            }, 2000);
        }
    }

    // mensagem de quando devolve o livro
    const onMessageDevolve = () => {

        if (livro.quantidade < livro.estoque) {
            setAlert2(true)
            setTimeout(() => {
                setAlert2(false);
            }, 2000);

            Devolver();
            setLivro({response});
        }

        else {

            setEstoqueMaior(true)
            setTimeout(() => {
                setEstoqueMaior(false);
            }, 2000);
        }
    }
    ////////////////////////////

    return (


        <ScrollView>

            <View style={styles.container}>

                <View >
                    <Text style={styles.header}>
                        {livro.name}
                    </Text>
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
                        style={{ alignItems: 'center', width: 200, height: 300, borderRadius: 5, border: "black" }}
                    />

                    <Text style={styles.description}>Quantidade: <Text style={styles.title}>{livro.quantidade}</Text></Text>

                </View>





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
                        color='#556B2F'

                        onPress={() => onMessage()}
                    />

                    {alert1 ? <Text style={styles.confirmText}>
                        Livro Alugado para {clienteNome}
                    </Text>
                        : <></>}

                    {estoqueMenor ? <Text style={styles.errorText}>
                        LIVRO INDISPONIVEL
                    </Text>
                        : <></>}

                    <Button
                        title='Devolver'
                        color='#BDB76B'
                        borderColor='black'

                        onPress={() => onMessageDevolve()}

                    />

                    {alert2 ? <Text style={styles.confirmText}>
                        Livro Devolvido por {clienteNome}
                    </Text>
                        : <></>}

                    {estoqueMaior ? <Text style={styles.errorText}>
                        impossivel Devolver
                    </Text>
                        : <></>}

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
        padding: 20,
        backgroundColor: '#BDB76B'
    },

    card: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
        marginVertical: 5,

        alignItems: 'center'
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
        marginBottom: 100
    },

    label: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 9
    },
    input: {
        borderWidth: 1,
        borderColor: 'green',
        borderRadius: 6,
        padding: 10,
        fontSize: 12,
        marginBottom: 6,
        width: 300
    },


    errorText: {
        color: "red",
        fontSize: 12,
        fontStyle: "italic"
    },
    confirmText: {
        color: "green",
        fontSize: 12,
        fontStyle: "italic"
    },

    header: {
        flexDirection: 'row',


        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor: '#556B2F',
        textAlign: 'center',

        color: 'white',

        borderBlockColor: 'black',
        flex: 1,
    },
})