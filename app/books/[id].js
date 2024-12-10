import { router } from "expo-router"

import { useEffect, useState } from "react";
import { Button, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { getRequestId, postRequest, postRequestDevolve } from "../../Api";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Undo2 } from "lucide-react-native";
import { postRequestUser } from "../../ApiUser";



export default function BookPage() {

    const [clienteNome, setNome] = useState([]);
    const [clienteEmail, setEmail] = useState("");
    const [dataNasc, setDataNasc] = useState([""]);
    const [task, setTask] = useState([]);
    const [idLivro, setIdLivro] = useState([""]);



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
            setLivro(response); //atualiza automatico a quantidad


        } catch (error) {

            console.error(error);
        }
    };
    ////////////////////////////



    // funcao para devolver livro (API)
    const Devolver = async () => {
        try {
            const response = await postRequestDevolve(id);// chama API pra alugar

            setLivro(response); //atualiza automatico a quantidade

        } catch (error) {
            console.error(error);
        }
    };
    ////////////////////////////

    // chamar usuario
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await getRequestuUser();
                setLivro(resp)

            } catch (ex) {
                console.error(ex)
            }
        };

        fetchData();

    }, [id])

    // mensagem de quando aluga o livro

    const onMessage = () => {

        if (livro.quantidade <= livro.estoque && livro.quantidade > 0 && clienteNome.length > 0) {


            setAlert1(true)
            setTimeout(() => {
                setAlert1(false);
            }, 2000);


            Alugar();
            const newTask = postRequestUser(clienteNome, clienteEmail, dataNasc, id);

            setTask(newTask);
            setNome("");
            setEmail("");
            setDataNasc("");
            setIdLivro(Alugar.response);

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

        if (livro.quantidade < livro.estoque && clienteNome.length > 0) {
            setAlert2(true)
            setTimeout(() => {
                setAlert2(false);
            }, 2000);

            Devolver();

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


        <ScrollView style={styles.container}>




            <View >


                <View style={styles.headerconteiner}>


                    <TouchableOpacity onPress={() => (

                        router.push({
                            pathname: "/",
                        })

                    )}>
                        <View style={styles.botaoVoltar}>
                            <Undo2 color='#556B2F' />



                        </View>
                    </TouchableOpacity >






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
                    style={{ alignItems: 'center', width: 200, height: 300, borderRadius: 9, borderColor: "black", borderWidth: 1, shadowColor: 'black', shadowOpacity: 9, shadowRadius: 5, }}
                />

                <Text style={styles.description}>Quantidade: <Text style={styles.title}>{livro.quantidade}</Text></Text>

            </View>





            <View style={styles.card}>
                <View >
                    <Text style={{ fontWeight: 'bold', height: 30, borderRadius: 5, color: "green" }}>
                        Dados Usuario
                    </Text>
                </View>

                <TextInput
                    style={styles.input}
                    placeholder='Nome'
                    value={clienteNome}
                    onChangeText={setNome}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    value={clienteEmail}
                    onChangeText={setEmail}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Data de nascimento'
                    value={dataNasc}
                    onChangeText={setDataNasc}
                />

                <Button
                    title='Alugar'
                    color='#556B2F'

                    onPress={() => onMessage()}
                />

                {alert1 ? <Text style={styles.confirmText}>
                    Livro Alugado com sucesso!
                </Text>
                    : <></>}

                {estoqueMenor ? <Text style={styles.errorText}>
                    Preecha o nome ou verifique se o livro esta disponivel
                </Text>
                    : <></>}

                <Button
                    title='Devolver'
                    color='#BDB76B'

                    onPress={() => onMessageDevolve()}

                />

                {alert2 ? <Text style={styles.confirmText}>
                    Livro Devolvido com sucesso!
                </Text>
                    : <></>}

                {estoqueMaior ? <Text style={styles.errorText}>

                    Impossivel devolver. Insira o nome ou Verifique o estoque

                </Text>
                    : <></>}

            </View>












        </View>

        </ScrollView >




    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 9,
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
        borderRadius: 6,
        fontSize: 22,
        fontWeight: 'bold',
        backgroundColor: '#556B2F',
        textAlign: 'center',
        alignContent: 'center',
        color: 'white',

        borderBlockColor: 'black',
        flex: 3
    },

    headerconteiner: {
        flexDirection: 'row',
        flex: 1,
        textAlign: 'center',
        alignContent: 'center',
    },
    botaoVoltar: {
        flex: 1,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: 'green',
        alignItems: 'center',
        verticalAlign: 'bottom',
        backgroundColor: 'lightgray'
    }

})