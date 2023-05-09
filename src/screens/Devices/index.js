import { View, Text } from "react-native"
import styles from "./styles"
import cStyles from "../../component/devicesGroup/styles"
import { useEffect, useState } from "react"
import ButtonController from '../../controller/api/button'

import Header from "../../component/header"
import DevicesGroup from "../../component/devicesGroup"
import SettingGroup from "../../component/settingGroup"

const Devices = ({navigation}) => {

    const [fan, setFan]       = useState(false)
    const [pump, setPump]     = useState(false)
    const [led, setLed]       = useState(false)
    const [auto, setAuto]     = useState(false)
    const [sectionStyle, setSectionStyle] 
        = useState([cStyles.boxShadow, cStyles.section])
    
    async function autoModeHandler() {
        setFan(false)
        setPump(false)
        setLed(false)
        setSectionStyle(!auto?[cStyles.inactiveSection]:[cStyles.section, cStyles.boxShadow])
        await ButtonController.turnoffAll()
    }

    useEffect(()=>{
        const HandleAutoFirst = async () => {
            const initAuto = await ButtonController.getButton('auto-mode')
            setAuto(initAuto)
            if(initAuto) setSectionStyle(!auto?[cStyles.inactiveSection]:[cStyles.section, cStyles.boxShadow])
        }
        HandleAutoFirst()
    }, [])
    
    return ( 
        <View style={styles.container}>
            <Header nav={navigation}/>

            <View style={styles.screenNameContainer}>
                <Text style={styles.screenName}>Devices</Text>
            </View>

            <DevicesGroup 
                index={0} 
                btn={fan} 
                setBtn={setFan}
                inactive={auto}
                style = {sectionStyle}
            />

            <DevicesGroup 
                index={1} 
                btn={pump} 
                setBtn={setPump}
                inactive={auto}
                style = {sectionStyle}
            />

            <DevicesGroup 
                index={2} 
                btn={led} 
                setBtn={setLed}
                inactive={auto}
                style = {sectionStyle}
            />

            <DevicesGroup 
                index={3} 
                btn={auto} 
                setBtn={setAuto} 
                autoModeHandler={autoModeHandler}
            />

            <SettingGroup/>

        </View>
    )
}

export default Devices