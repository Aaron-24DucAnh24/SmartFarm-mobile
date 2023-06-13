import { View, Text } from 'react-native';
import styles from './styles';

const getFeedName = {
    'light-button': 'LED Light',
    'fan-button': 'Fan',
    'pump-button': 'Pump',
    'light': 'Light',
    'humidity': 'Humidity',
    'temperature': 'Temperature',
};

export default function LogGroup({data}) {

    const {time, value, feed, event} = data;

    const timeString = new Date(time*1000).toUTCString();

    return (
        <View style={styles.container}>
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>
                    {timeString}
                </Text>
            </View>

            <View style={styles.topicContainer}>
                <Text style={styles.topicText}>
                    {getFeedName[feed] || feed}
                </Text>
            </View>

            <View style={styles.dataContainer}>
                <Text style={event === 'overbound' ? styles.dataTextDanger : styles.dataText}>
                    {event}
                </Text>
            </View>

        </View>
    );
}
