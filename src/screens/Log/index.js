import {View, Text, ScrollView} from 'react-native';
import styles from './styles';
import Header from '../../component/header';
import LogGroup from '../../component/logGroup';
import {useEffect, useRef, useState} from 'react';
import database from '@react-native-firebase/database'

const LOGS_MAX_LENGTH = 20;
const Log = ({navigation}) => {
  const [logList, setLogList] = useState([]);
  const scrollRef = useRef();

  const handleOnNewLog = () => {
    scrollRef.current && scrollRef.current.scrollTo({ y: 0, animated: true });
  };

  useEffect(() => {
    database().ref('/log')
        .limitToLast(LOGS_MAX_LENGTH)
        .on('child_added', (snap) => {
          setLogList(prev => 
            prev.length<=LOGS_MAX_LENGTH?
            [ snap.val(), ...prev].slice(0, LOGS_MAX_LENGTH):
            [ snap.val(), ...prev]
          )
        })
  }, []);

  return (
    <View style={styles.container}>
      <Header nav={navigation} />

      <View style={styles.screenNameContainer}>
        <Text style={styles.screenName}>System logs</Text>
      </View>

      <ScrollView
        style={styles.scrollView}
        ref={scrollRef}
        onContentSizeChange={handleOnNewLog}
        >
        {
          logList.map((log, index) => (
            <LogGroup
              key={index}
              data={log}
            />
          ))
        }
      </ScrollView>
    </View>
  );
};

export default Log;
