import { StyleSheet, View } from 'react-native';

import Title from './Title';
import MD from './MyDropoints';
import Extract from './Extract';

export default function Discards() {
  return (
    <View style={{flex:1}}>
      <Title/>
      <MD/>
      <Extract/>
    </View>
  );
}
