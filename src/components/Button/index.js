// @flow

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import type { NavigationState } from "react-navigation"

type Props = {
  title: string,
  onPress: () => void
}

const Button = ({ title, onPress }: Props) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
)

export default Button
