import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import styles from "./styles"
import Header from "../../component/header"
import LogGroup from "../../component/logGroup"
import { useEffect, useRef, useState } from "react"

const Log = ({navigation}) => {

    // just for test UI
    const initLogList = [
        {
            time: '12/2/2022-12:12:12',
            topic: 'LED light',
            data: 'off'
        },
        {
            time: '12/2/2022-12:12:12',
            topic: 'LED light',
            data: 'off'
        },
        {
            time: '12/2/2022-12:12:12',
            topic: 'LED light',
            data: 'off'
        },
        {
            time: '12/2/2022-12:12:12',
            topic: 'LED light',
            data: 'off'
        },
        {
            time: '12/2/2022-12:12:12',
            topic: 'Humidity',
            data: 'Over-bound'
        },
        {
            time: '12/2/2022-12:12:12',
            topic: 'LED light',
            data: 'off'
        },
        {
            time: '12/2/2022-12:12:12',
            topic: 'Humidity',
            data: 'Over-bound'
        },
        {
            time: '12/2/2022-12:12:12',
            topic: 'LED light',
            data: 'off'
        },
        {
            time: '12/2/2022-12:12:12',
            topic: 'Humidity',
            data: 'Over-bound'
        }
    ]
    //________________

    const [logList, setLogList] = useState(initLogList)
    const scrollRef = useRef()
    const addLog = (log) => {
        setLogList([...logList, log])
    }

    useEffect(()=>{
        scrollRef.current.scrollToEnd({animated: true})
    }, [])

    return (
        <View style={styles.container}>
            <Header nav={navigation}/>

            <View style={styles.screenNameContainer}>
                <Text style={styles.screenName}>System logs</Text>
            </View>

            <ScrollView 
                style={styles.scrollView}
                ref={scrollRef}
                onContentSizeChange={()=>scrollRef.current.scrollToEnd()}
            >
                {
                    logList.map((log, index) => {
                        return <LogGroup log={log} key={index}/>
                    })
                }
            </ScrollView>
        </View>
    )
}

export default Log