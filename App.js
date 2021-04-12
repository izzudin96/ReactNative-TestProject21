import React from 'react';
import { StyleSheet, SafeAreaView, Alert, Button } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <WelcomeScreen/>
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
