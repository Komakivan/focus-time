import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/roundedButton';
import { spacing } from '../utils/sizes';

export const Focus = ({ addTask }) => {
  const [task, setTask] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          label="what would you like to focus on?"
          onChangeText={setTask}
        />
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={() => addTask(task)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  button: {
    justifyContent: 'center',
  },
  inputContainer: {
    padding: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'top',
  },
});
