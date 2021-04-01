import React, {useState, useLayoutEffect} from 'react'
import { StatusBar } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { StyleSheet, View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import colors from '../config/colors';
import { auth } from '../firebase'

const RegisterScreen = ({navigation}) => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [imageUrl,setImageUrl] = useState('');

useLayoutEffect(() => {
    navigation.setOptions({
        headerBackTitle: "Back"
    })
}, [navigation])

    const register = () => {
        auth.createUserWithEmailAndPassword(email,password)
        .then(authUser => {
            authUser.user.update({
                displayName: name,
                photoURL: imageUrl || "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png"
            })
        })
        .catch(error => alert(error.message))
    }
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
            <Text h3 style={styles.createAccountText}>Create an account</Text>
            <View style={styles.inputContainer}>
            <Input placeholder="Full Name" type="text"
            value={name}
            onChangeText={(text) => setName(text)}
            />
            <Input
            placeholder="Email" type="email"
            value={email}
            onChangeText={(text) => setEmail(text)}/>
            <Input
            placeholder="Password" type="password"
            value={password}
            secureTextEntry
            onChangeText={(text) => setPassword(text)}/>
            <Input
            placeholder="Profile Picture URL (Optional)" type="text"
            value={imageUrl}
            onChangeText={(text) => setImageUrl(text)}
            onSubmitEditing={register}/>
            <Button title="Register" onPress={register} style={styles.button}/>
            </View>
            
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 10
    },
    createAccountText: {
        fontWeight: '500',
        padding: 10,
        position: 'absolute',
        top: 20,
        color: 'grey'
    },
    inputContainer: {
        width: '100%',
        margin: 10
    },
    button: {
        padding: 5,
    }
})
