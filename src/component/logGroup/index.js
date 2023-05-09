import { View, Text } from "react-native"
import styles from "./styles"

export default function LogGroup(props) {

    const time = props.log.time.substring(0, 19)
    const value = props.log.event=='overbound'?'Over-bound':props.log.value?'On':'Off'
    var feed = ''

    switch (props.log.feed) {
        case 'light-button':
            feed = 'LED light'
            break;
    
        case 'fan-button':
            feed = 'Fan'
            break;

        case 'pump-button':
            feed = 'Pump'
            break;

        default:
            feed = props.log.feed.charAt(0).toUpperCase() + props.log.feed.slice(1)
            break;
    }

    return (
        <View style={styles.container}>
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>
                    {time}
                </Text>
            </View>

            <View style={styles.topicContainer}>
                <Text style={styles.topicText}>
                    {feed}
                </Text>
            </View>

            <View style={styles.dataContainer}>
                <Text style={props.log.event==='overbound'?styles.dataTextDanger:styles.dataText}>
                    {value}
                </Text>
            </View>

        </View>
    )
}