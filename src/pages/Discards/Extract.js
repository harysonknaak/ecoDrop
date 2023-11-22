import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import boxIcon from '../../../assets/box-icon.png'


const dados = [
  {
    id:'001',
    info:['5551', '500']
  },
  {
    id:'002',
    info:['5552', '750']
  },
  {
    id:'003',
    info:['5553', '250']
  },
  {
    id:'004',
    info:['5554', '1000']
  }
]


export default function Extract(){
  return(
    <View style={styles.container}>
      <View>
        <Text style={{textAlign:'center', fontWeight:'bold'}}>Extrato</Text>
      </View>
      <FlatList
        data={dados}
        keyExtractor={item => item.id}
        renderItem={({item}) =>
        <View style={styles.boxExtract}>
          <View style={styles.box}>
            <View>
              <Image style={styles.icon} source={boxIcon}/>
            </View>
            <View style={{justifyContent:'center'}}>
              <Text style={styles.textBox}> Request Number: {item.info[0]}</Text>
              <Text style={styles.textBox}> {item.info[1]} Dropoints</Text>
            </View>
          </View>
        </View>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "row",
    backgroundColor: '#FFFFF',
    paddingTop: 15
  },
  boxExtract: {
    flex: 1,
    paddingTop: 8,
    alignItems: 'center'
  },
  box: {
    flex: "row",
    backgroundColor: '#F5F5F5',
    padding: 8,
    width: "90%",
    alignContent: "center",
    borderRadius: 10,
    flexDirection: "row"
  },
  textBox: {
    fontSize: 14,
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
