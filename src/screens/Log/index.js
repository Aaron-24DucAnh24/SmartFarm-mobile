import { View, Text, ScrollView } from "react-native"
import styles from "./styles"
import Header from "../../component/header"
import LogGroup from "../../component/logGroup"
import { useEffect, useRef, useState } from "react"
import { db } from "../../controller/firebase/app"
import { ref, onChildAdded, limitToLast, query } from 'firebase/database'

const Log = ({navigation}) => {

    const [logList, setLogList] = useState([])
    const scrollRef = useRef()

    function addLog(log) {
        if(logList.length < 20)
            setLogList(logList => [...logList, log])
        else {
            const [, ...rest] = logList
            setLogList([...rest, log])
        }
        scrollRef.current.scrollToEnd({animated: true})
    }

    useEffect(()=> {
        const logRef = query(ref(db, 'log'), limitToLast(20))

        onChildAdded(logRef, snapshot => {
            addLog(snapshot.val())
        })
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