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
  const isLoading = useRef(true);

  const handleOnNewLog = () => {
    scrollRef.current && scrollRef.current.scrollTo({ y: 0, animated: true });
  };

  useEffect(() => {
    database().ref('/log')
        .orderByChild('time')
        .limitToFirst(LOGS_MAX_LENGTH)
        .once('value')
        .then(snapshot => {
          const logs = Object.values(snapshot.val());
          setLogList(logs);
          isLoading.current = false;
        });

    const newLogHandler = database().ref('/log').on('child_added', (snap) => {
      if (isLoading.current) {
        return;
      }
      setLogList(prev => [ snap.val(), ...prev].slice(0, LOGS_MAX_LENGTH));
    });

    return () => newLogHandler && database().ref('/log').off('value', newLogHandler)
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
        {logList.map((log, index) => (
          <LogGroup
            key={index}
            data={log}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Log;
