import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Input, Image} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAvoidingView } from 'react-native';

const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    
    const signIn = () => {

    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
            <Image source={{
                uri:"https://ffp4g1ylyit3jdyti1hqcvtb-wpengine.netdna-ssl.com/internetcitizen/files/2018/08/signal-logo.png"
            }} style={styles.signalLogo}/>
            <View style={styles.inputContainer}>
                <Input 
                placeholder="Email" 
                type="email" 
                value={email}
                onChangeText={(text) => setEmail(text)}
                />
                <Input 
                placeholder="Password"
                value={password}
                type="password"
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
                />
                <Button style={styles.button} onPress={signIn} title="Login"/>
                <Button style={styles.button} title="Register" type="outline" onPress={() => navigation.navigate('Register') }/>
            </View>
            <View style={{marginBottom: 100}}></View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signalLogo: {
        width: 200, 
        height: 200
    },
    inputContainer: {
        width: 300
    },
    button: {
        padding: 5,
    }
});
