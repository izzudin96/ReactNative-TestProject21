import React from 'react';
import { StyleSheet, SafeAreaView, Alert, Button } from 'react-native';
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Login from "./app/screens/Login";
import Screen from "./app/components/Screen";

export default function App() {
  return (
      <Screen style={styles.container}>
          <Login/>
      </Screen>
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
