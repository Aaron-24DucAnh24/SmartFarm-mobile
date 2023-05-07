import { useState, useEffect } from "react"
import { View, Text } from "react-native"
import { db } from "../../controller/firebase/app"
import { ref, onValue } from "firebase/database"
import styles from "./styles"
import Header from "../../component/header"
import ConditionGroup from '../../component/conditionGroup'

const Home = ({navigation}) => {
  const [ light, setLight ] = useState({})
  const [ humidity, setHumidity ] = useState({})
  const [ temperature, setTemperature ] = useState({})

  useEffect(() => {
    const lightRef = ref(db, "light/current")
    const temperatureRef = ref(db, "temperature/current")
    const humidityRef = ref(db, "humidity/current")

    onValue(temperatureRef, snapshot => {
      setTemperature(snapshot.val())
    })

    onValue(humidityRef, snapshot => {
      setHumidity(snapshot.val())
    })

    onValue(lightRef, (snapshot) => {
      setLight(snapshot.val())
    })
  }, [])

    return (
        <View style={styles.container}>
          <Header nav={navigation}/>

          <View style={styles.screenNameContainer}>
            <Text style={styles.screenName}>Conditions</Text>
          </View>

          <ConditionGroup data={temperature} index={0} nav={navigation}/>

          <ConditionGroup data={humidity} index={1} nav={navigation}/>

          <ConditionGroup data={light} index={2} nav={navigation}/>
        </View>
    )
}

export default Home