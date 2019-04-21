// @flow

import React, { Component } from "react"
import { View, Text, ScrollView } from "react-native"
import type { NavigationState } from 'react-navigation'
import Header from '../../components/Header'
import Button from '../../components/Button'
import styles from "./styles"

type Props = {
  loadQuestion: () => void,
  nextScreen: () => void,
  navigation: NavigationState
}

class HomeScreen extends Component<Props> {


  // Load the game questions
  componentDidMount() {
    const { loadQuestion } = this.props
    loadQuestion()
  }

  render() {
    const { nextScreen } = this.props

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <Header title='Welcome to the' subtitle='Trivia Challenge!' />

          <View style={styles.content}>
            <Text style={styles.text}>
              You will be presented with 10 True or False questions.
            </Text>
            <Text style={styles.text}>
              Can you score 100%?
            </Text>
          </View>

        </ScrollView>
        <Button title='BEGIN' onPress={nextScreen} />

      </View>
    )
  }
}

export default HomeScreen
