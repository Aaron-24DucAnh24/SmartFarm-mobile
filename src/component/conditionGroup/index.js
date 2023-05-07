import { View, Text, TouchableOpacity } from 'react-native'
import Icon  from 'react-native-vector-icons/FontAwesome'
import React from 'react'
import styles from './styles'

const enCondition = [
    { conName: 'Temperature', unit: '°C', device: 'Fan' },
    { conName: 'Soil humidity', unit: '%', device: 'Pump' }, 
    { conName: 'Light intensity', unit: 'lux', device: 'LED' }, 
]

const NavButton = (props) => (
    <TouchableOpacity  
        style={[styles.btn, styles.boxShadow]}
        onPress={()=>props.nav.jumpTo('Devices')}
    >
        <Text style={styles.btnText}>{props.title}</Text>
        <View style={styles.postFixWrapper}>
           <Icon name='angle-right' size={18} color={'white'}/>
        </View>
    </TouchableOpacity>
)

function ConditionGroup(props) {
    return (
        <View style={[styles.section, styles.boxShadow]}>
            <View style={styles.dataPart}>
                <View style={styles.condition}>
                    <Text style={styles.conditionText}>
                        {enCondition[props.index].conName}
                    </Text>
                </View>
                <View style={styles.dataContainer}>
                    <Text style={styles.data}>
                        {props.data?.value||'__'}
                    </Text>
                    <View style={styles.unitContainer}>
                        <Text style={styles.unit}>
                            {enCondition[props.index].unit}
                        </Text>
                    </View>
                </View>
            </View>
        
        <NavButton
            title={enCondition[props.index].device}
            onPress={()=>console.log('Hello')}
            nav={props.nav}
        />

        </View>
    )
}

export default ConditionGroup
