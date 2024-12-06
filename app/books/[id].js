import { useSearchParams } from "expo-router/build/hooks"
import { StyleSheet, Text, View } from "react-native"

export default function BookPage() {
    const { id } = useSearchParams
    return (
        <View>
            <Text>
                My book Page{id}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
})