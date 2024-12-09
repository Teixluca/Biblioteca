
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";


export default function DevolveOkPage() {

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

                <Pressable onPress={() => (

                    router.push({
                        pathname: "/",
                    })

                )}>
                    <Text> Tela inicial</Text>

                </Pressable>

            </View>
        </View>



    )

}