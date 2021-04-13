import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import AppTextInput from "../components/AppTextInput";
import defaultStyles from "../config/styles";

function Login(props) {
    return (
        <View style={styles.container}>
            <AppTextInput icon={'form-textbox-lock'} placeholder="Username"/>
            <AppTextInput icon={'form-textbox-password'} placeholder="Password" secureTextEntry={true}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "80%"
    },
});

export default Login;