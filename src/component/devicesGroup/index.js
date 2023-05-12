import { View, Text } from 'react-native'
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import SwitchToggle from "react-native-switch-toggle"
import React, { useEffect } from 'react'
import styles from './styles'
import color from '../../assets/color'
import AdaController from '../../controller/adafruit'

const devices = [
    { name: 'Mini fan', icon: 'fan', feed: 'fan-button' },
    { name: 'Water pump', icon: 'water-pump', feed: 'pump-button' },
    { name: 'LED light', icon: 'lightbulb', feed: 'light-button' },
    { name: 'Auto mode', icon: 'refresh-auto', feed: 'auto-mode'}
]

export default function DevicesGroup(props) {

    const index    = props.index
    const btn      = props.btn
    const setBtn   = props.setBtn
    const inactive = props.inactive

    async function handleBtn () {
        if(props.autoModeHandler) {
            const data = btn?0:1
            setBtn(!btn)
            await AdaController.setButton(devices[index].feed, data)
            props.autoModeHandler()
        } else {
            if(inactive)
                return
            else {
                const data = btn?0:1
                setBtn(!btn)
                await AdaController.setButton(devices[index].feed, data)
            }
        }
    }

    useEffect(() => {
        const SetButtonFirst = async () => {
            if(index!=3){
                const initBtn = await AdaController.getFeedValue(devices[index].feed)
                setBtn(initBtn)
            }
        }
        SetButtonFirst()
    }, [])

    return (
        <View style={props.autoModeHandler?[styles.boxShadow, styles.section]:props.style}>
            <View style={styles.deviceContainer}>
                <Icon name={devices[index].icon} size={32} color={color.black}/>
                <View style={styles.deviceNameContainer}>
                    <Text style={styles.deviceName}>{devices[index].name}</Text>
                </View>
            </View>

            <SwitchToggle
                switchOn={btn}
                onPress={handleBtn}
                circleColorOff={color.white}
                circleColorOn={color.white}
                backgroundColorOn={color.blue}
                backgroundColorOff={color.silver}
                containerStyle={{
                    width: 65,
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