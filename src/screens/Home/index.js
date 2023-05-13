import {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Header from '../../component/header';
import ConditionGroup from '../../component/conditionGroup';
import AdaController from '../../controller/adafruit';
import config from '../../controller/adafruit/config';

const Home = ({navigation}) => {
  const [light, setLight] = useState('__');
  const [humidity, setHumidity] = useState('__');
  const [temperature, setTemperature] = useState('__');

  useEffect(() => {
    const getDataFirst = async () => {
      const initTemp = await AdaController.getConditionData('temperature');
      const initHumi = await AdaController.getConditionData('humidity');
      const initLight = await AdaController.getConditionData('light');
      setTemperature(initTemp);
      setLight(initLight);
      setHumidity(initHumi);
    };
    getDataFirst();

    const mqtt = require('@taoqf/react-native-mqtt');
    const client = mqtt.connect(config.url, [
      {
        username: config.options.username,
        password: config.options.password,
        port: config.options.port,
        host: config.options.host,
        protocolId: config.options.protocolId,
        clientId: (Math.random() * 1000).toString(),
      },
    ]);

    client.on('connect', () => {
      client.subscribe('ducanh_24/feeds/temperature');
      client.subscribe('ducanh_24/feeds/light');
      client.subscribe('ducanh_24/feeds/humidity');
    });

    client.on('message', (topic, payload) => {
      if (topic.includes('temperature')) {
        setTemperature(payload.toString());
      }
      if (topic.includes('humidity')) {
        setHumidity(payload.toString());
      }
      if (topic.includes('light')) {
        setLight(payload.toString());
      }
      console.log('ok');
    });

    return () => {
      client.end();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Header nav={navigation} />

      <View style={styles.screenNameContainer}>
        <Text style={styles.screenName}>Conditions</Text>
      </View>

      <ConditionGroup data={temperature} index={0} nav={navigation} />

      <ConditionGroup data={humidity} index={1} nav={navigation} />

      <ConditionGroup data={light} index={2} nav={navigation} />
    </View>
  );
};

export default Home;
