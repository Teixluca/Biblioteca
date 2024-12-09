
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import BookPage from "../books/[id]";
import { Button } from "react-native-web";



console.log(" AQUI OOOOOOOOOOOOO", "POrrraaa")

export default function OkPage(id) {

    return (
        <View>
            <Text>
                Deu Boa!!
            </Text>


            <View  >

                <Pressable onPress={() => (

                    router.push({
                        pathname: "books/[id]",
                    })



                )}>
                    <Text> Voltar </Text>

                </Pressable>



                <Button style={styles.button}

                    onPress={() => (



                        router.push({
                            pathname: "/",
                        })

                    )}>
                    <Text> Tela inicial</Text>

                </Button>

            </View>


        </View>



    )

}

const styles = StyleSheet.create({
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

})