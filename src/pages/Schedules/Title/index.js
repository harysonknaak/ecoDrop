import { View, Text } from "react-native";
import styles from "./style";

export default function Title(){
    return(
        <View style={styles.container}>
            <Text style={styles.tittle}>Meus Agendamentos</Text>
        </View>
    );
}