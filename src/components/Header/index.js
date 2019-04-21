// @flow

import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

type Props = {
  title: string,
  subtitle: string
}

const Header = ({ title, subtitle }: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>{subtitle}</Text>
  </View>
)

export default Header
