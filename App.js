import React from 'react';
import { StyleSheet, SafeAreaView, Alert, Button } from 'react-native';

export default function App() {

  const handlePress = () => {
    Alert.alert("My title", "My message", [
        {text: "Yes"},
        {text: "No"},
        {text: "Not sure"},
        {text: "Interesting", onPress: function() { console.log('interesting!!!!') }}
    ]);

    Alert.prompt('Hello', 'Hi there', (text) => { console.log(text)});
  }

  return (
    <SafeAreaView style={styles.container}>
        <Button title="Click Me" onPress={handlePress} color="orange"/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
});
