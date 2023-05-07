import { View, Text } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import SwitchToggle from "react-native-switch-toggle"
import ButtonController from '../../controller/button'
import React, { useEffect, useState } from 'react'
import styles from './styles'

const devices = [
    { name: 'Mini fan', icon: 'fan', feed: 'fan-button' },
    { name: 'Water pump', icon: 'water-pump', feed: 'pump-button' },
    { name: 'LED light', icon: 'lightbulb', feed: 'light-button' },
    { name: 'Auto mode', icon: 'refresh-auto', feed: 'auto-mode'}
]

export default function DevicesGroup(props) {

    const index = props.index
    const btn   = props.btn
    const setBtn = props.setBtn
    const inactive = (typeof props.inactive)=='boolean'?props.inactive:false


    async function handleBtn () {
        var data = btn?0:1
        await ButtonController.setButton(devices[index].feed, data)
        setBtn(!btn)
        if(props.autoModeHandler) {
            props.autoModeHandler()
        }
    }

    useEffect(() => {
        const SetButtonFirst = async () => {
            if(index!=3){
                const initBtn = await ButtonController.getButton(devices[index].feed)
                setBtn(initBtn)
            }
        }
        SetButtonFirst()
    }, [])

    return (
        <View style={props.autoModeHandler?[styles.boxShadow, styles.section]:props.style}>
            <View style={styles.deviceContainer}>
                <Icon name={devices[index].icon} size={32} color={'#000'}/>
                <View style={styles.deviceNameContainer}>
                    <Text style={styles.deviceName}>{devices[index].name}</Text>
                </View>
            </View>

            <SwitchToggle
                switchOn={btn}
                onPress={inactive?()=>{}:handleBtn}
                circleColorOff='#fff'
                circleColorOn='#fff'
                backgroundColorOn='#2a78e4'
                backgroundColorOff='#627580'
                containerStyle={{
                    width: 60,
                    height: 25,
                    borderRadius: 25,
                    padding: 2,
                  }}
                  circleStyle={{
                    width: 20,
                    height: 20,
                    borderRadius: 20,
                  }}
            />

        </View>
    )
}