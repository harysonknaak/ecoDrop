import { View, Text, Image, StyleSheet} from "react-native";
import dropointsIcon from '../../../assets/dropoints-icon.png'

export default function MyDropoints(){
  return(
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.textBox}>Meus Dropoints</Text>
        <View style={styles.saldo}>
          <Image style={styles.icon} source={dropointsIcon} />
          <Text style={styles.saldoText}>3000</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "row",
    backgroundColor: '#FFFFF',
    paddingTop: 15,
    alignItems: "center"
  },
  box: {
    flex: "row",
    backgroundColor: '#F5F5F5',
    padding: 8,
    width: "90%",
    height: 100,
    borderRadius: 10,
    justifyContent: 'center'
  },
  textBox: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10
  },
  saldo: {
    flexDirection: "row",
    alignItems: "center"
  },
  saldoText: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 10
  },
  icon: {
    height: 50,
    width: 50,
    padding: 8
  }
});
