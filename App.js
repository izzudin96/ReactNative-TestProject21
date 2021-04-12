import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight } from 'react-native';

export default function App() {

  const handlePress = () => {
    console.log('Tapping image');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text onPress={handlePress}>
        Hello
      </Text>
      <TouchableHighlight onPress={handlePress}>
        <Image
            source={{
              width: 200,
              height: 300,
              uri: "https://picsum.photos/200/300"
            }}
        />
      </TouchableHighlight>
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
