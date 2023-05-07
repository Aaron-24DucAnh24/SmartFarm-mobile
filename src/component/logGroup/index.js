import { View, Text } from "react-native"
import styles from "./styles"

export default function LogGroup(props) {
    return (
        <View style={styles.container}>
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>{props.log.time}</Text>
            </View>

            <View style={styles.topicContainer}>
                <Text style={styles.topicText}>{props.log.topic}</Text>
            </View>

            <View style={styles.dataContainer}>
                <Text style={props.log.data==='Over-bound'?styles.dataTextDanger:styles.dataText}>
                    {props.log.data}
                </Text>
            </View>

        </View>
    )
}