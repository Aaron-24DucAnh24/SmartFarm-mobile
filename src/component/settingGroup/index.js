import React, { useEffect, useState } from "react"
import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native"
import styles from "./style"
import Icon from 'react-native-vector-icons/Ionicons'
import color from "../../assets/color"
import { Platform } from "react-native"
import { db } from "../../controller/firebase/app"
import { onValue, ref, set } from "firebase/database"

export default function SettingGroup(props) {

    const [temp, setTemp] = useState("")
    const [humi, setHumi] = useState("")
    const [light, setLight] = useState("")

    const [preTemp, setPreTemp] = useState("")
    const [preHumi, setPreHumi] = useState("")
    const [preLight, setPreLight] = useState("")

    async function handleSubmit() {
        if(!temp && !humi && !light) {
            Alert.alert("Alert", "All fields are empty.", [{text: 'OK', style: 'cancel'}])
            return
        }
        if(temp) {
            set(ref(db, '/threshold/temperature'), parseInt(temp))
            setTemp('')
        }
        if(humi) {
            set(ref(db, '/threshold/humidity'), parseInt(humi))
            setHumi('')
        }
        if(light) {
            set(ref(db, '/threshold/light'), parseInt(light))
            setLight('')
        }
    }

    useEffect(()=> {
        const thresholdRef = ref(db, 'threshold')

        onValue(thresholdRef, snapshot => {
            setPreTemp(snapshot.val().temperature.toString())
            setPreHumi(snapshot.val().humidity.toString())
            setPreLight(snapshot.val().light.toString())
        })

    }, [])

    return (
        <View style={[styles.container, styles.boxShadow]}>

            <View style={styles.firstLine}>
                <View style={styles.firstRow}>
                    <Icon name='ios-settings' size={32} color={color.black}/>
                    <Text style={styles.firstLineText}>{'Setting'}</Text>
                </View>
                <TouchableOpacity 
                    style={[styles.submitButton, styles.boxShadow]}
                    onPress={handleSubmit}
                >
                    <Text style={styles.submitText}>{'Submit'}</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.secondLine}>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>{'Max temperature'}</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder={`${preTemp} °C`}
                        keyboardType={Platform.OS=="ios"?"numbers-and-punctuation":"decimal-pad"}
                        value={temp}
                        onChangeText={setTemp}
                        placeholderTextColor={color.silver}
                    />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>{'Min humidity'}</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder={`${preHumi} %`}
                        keyboardType={Platform.OS=="ios"?"numbers-and-punctuation":"decimal-pad"}
                        value={humi}
                        onChangeText={setHumi}
                        placeholderTextColor={color.silver}
                    />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>{'Min light intensity'}</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder={`${preLight} lux`}
                        keyboardType={Platform.OS=="ios"?"numbers-and-punctuation":"decimal-pad"}
                        value={light}
                        onChangeText={setLight}
                        placeholderTextColor={color.silver}
                    />
                </View>
            </View>

        </View>
    )
}