import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {RoundedButton} from '../components/roundedButton'


export const Timing = ({onChangeTime}) => {
  return (
      <View style ={styles.timingButton}>
          <RoundedButton size ={75} title ='10' onPress ={() => onChangeTime(10)}/>
      </View>
  )
}


const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center'
  }
})

