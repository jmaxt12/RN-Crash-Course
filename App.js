import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return ( 
    <View style={styles.containier}>
      <Text>Hello World</Text>
    </View>
   );
}

const styles = StyleSheet.create({
  containier: {
    flex: 1, 
  },
})
 
export default App;