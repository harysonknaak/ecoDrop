import { View, Text, StyleSheet } from "react-native";

export default function Title(){
    return(
        <View style={styles.container}>
            <Text style={styles.tittle}>Meus Descartes</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: "row",
        backgroundImage: 'linear-gradient(to left, #0ED028 0%, #2B92D6 100%)',
        padding: 5,
    },
    tittle: {
        margin: 20,
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
