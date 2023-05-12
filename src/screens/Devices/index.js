import { View, Text } from "react-native"
import styles from "./styles"
import cStyles from "../../component/devicesGroup/styles"
import { useEffect, useState } from "react"
import Header from "../../component/header"
import DevicesGroup from "../../component/devicesGroup"
import SettingGroup from "../../component/settingGroup"
import AdaController from '../../controller/adafruit/index'
import config from "../../controller/adafruit/config"

const Devices = ({navigation}) => {

    const [fan, setFan]       = useState(false)
    const [pump, setPump]     = useState(false)
    const [led, setLed]       = useState(false)
    const [auto, setAuto]     = useState(false)
    const [sectionStyle, setSectionStyle] 
        = useState([cStyles.boxShadow, cStyles.section])
    
    async function autoModeHandler() {
        setSectionStyle(!auto?[cStyles.inactiveSection]:[cStyles.section, cStyles.boxShadow])
        await AdaController.turnoffAll()
    }

    useEffect(()=>{
        const HandleAutoFirst = async () => {
            const initAuto = await AdaController.getFeedValue('auto-mode')
            setAuto(initAuto)
            if(initAuto) 
                await autoModeHandler()
        }
        HandleAutoFirst()

        const mqtt = require('@taoqf/react-native-mqtt')
        const client = mqtt.connect(config.url, [{
          username: config.options.username,
          password: config.options.password,
          port: config.options.port,
          host: config.options.host,
          protocolId: config.options.protocolId,
          clientId: (Math.random()*1000).toString()
        }])
        
        client.on('connect', () => {
          client.subscribe('ducanh_24/feeds/light-button')
          client.subscribe('ducanh_24/feeds/pump-button')
          client.subscribe('ducanh_24/feeds/fan-button')
        })
    
        client.on('message', async (topic, payload)=> {
            if(topic.includes('fan')) {
                setFan(payload.toString()==='1'?true:false)
            }
            if(topic.includes('light')){
                setLed(payload.toString()==='1'?true:false)
            }
            if(topic.includes('pump')){
                setPump(payload.toString()==='1'?true:false)
            }
        })

        return ()=> {
            client.end()
        }

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