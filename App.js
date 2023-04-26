import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import {Timer} from './src/features/Timer'

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [currentTask, setCurrentTask] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      {!currentTask ? (
        <Focus addTask = {setCurrentTask} />
      ) : (
        <Timer 
          focusSubject = {currentTask}
          
          onTimerEnd = {() => {}}
          clearSubject = {() => {}}
        >

        </Timer>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.dark,
  
  },
});
