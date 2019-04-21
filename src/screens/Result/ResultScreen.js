// @flow

import React, { Component } from "react"
import { View, Text, ScrollView, Image } from "react-native"
import Header from '../../components/Header'
import Button from '../../components/Button'
import styles from "./styles"
import iconCorrect from '../../assets/icons/iconCorrect/iconCorrect.png'
import iconIncorrect from '../../assets/icons/iconIncorrect/iconIncorrect.png'

type State = {
  index: number,
  indice: number
}

type Props = {
  nextScreen: () => void,
  navigation: NavigationState,
  answers: Array
}

class ResultScreen extends Component<Props, State> {

  // Loads each answer item
  _renderItem(item, i) {
    return (
      <View style={styles.item} key={i}>
        <Image source={item.isCorrect ? iconCorrect : iconIncorrect} style={styles.icon} resizeMode="contain" />
        <Text style={styles.text}>
          {item.question}
        </Text>
      </View>
    )
  }

  // account the total of certain answers
  _counterCorrectAnswer(answers) {
    return answers.reduce((prevVal, elem) => prevVal + elem.isCorrect, 0)
  }

  // Restart the game, go to the beginning of the game
  _restart() {
    const { nextScreen } = this.props
    nextScreen()
  }

  render() {
    const { answers } = this.props

    // Loads the response component
    const componentAnswers = answers.map((item, i) => this._renderItem(item, i))

    const total = this._counterCorrectAnswer(answers)

    return (

      <View style={{ flex: 1 }}>
        <ScrollView>
          <Header title='You scored' subtitle={`${total} / 10`} />
          <View>
            {componentAnswers}
          </View>
          <Button title='PLAY AGAIN?' onPress={() => { this._restart() }} />
        </ScrollView>

      </View>

    )
  }
}

export default ResultScreen