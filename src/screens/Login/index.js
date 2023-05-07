import { View, Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from './styles'

export default function LoginPage ({navigation}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        if(username!='' && password!='') {
            setPassword('')
            setUsername('')
            navigation.navigate('main')
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.introContainer}>
                <View style={styles.bigIntroContainer}>
                    <Text style={styles.bigIntroText}>
                        WELL COME BACK TO SMART FARM
                    </Text>
                </View>
                <View style={styles.smallIntroContainer}>
                    <Text style={styles.smallIntroText}>
                        Let's sign you in
                    </Text>
                </View>
            </View>

            <SafeAreaView style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Username"
                        autoFocus={true}
                        onChangeText={setUsername}
                        placeholderTextColor={'#83888A'}
                        value={username}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry={true}
                        onChangeText={setPassword}
                        placeholderTextColor={'#83888A'}
                        value={password}
                    />
                </SafeAreaView>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

        </View>
    )
}