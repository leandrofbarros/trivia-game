// @flow

import React, { Component } from "react"
import { View, Text, ScrollView, TouchableOpacity } from "react-native"
import Header from '../../components/Header'
import styles from "./styles"

type State = {
  index: number,
  indice: number
}

type Props = {
  nextScreen: () => void,
  questions: Array,
  navigation: NavigationState,
  saveAnswers: () => void,
}

class QuizScreen extends Component<Props, State> {

  constructor(props: Props) {
    super(props)

    this.state = {
      index: 0,
      indice: 1,
      answers: []
    }
  }

  // Checks whether the answer is correct or not
  _checkAnswer(answer: Boolean) {
    const { questions } = this.props
    const { index, answers } = this.state
    const { question } = questions.questions[index]
    const questionBool = (questions.questions[index].correct_answer.toLowerCase() === 'true')
    const isCorrect = questionBool === answer

    const answerQuestion = {
      'question': question,
      'isCorrect': isCorrect
    }

    answers.push(answerQuestion)
    this.setState({ answers })
    this._renderNewQuestion()
  }

  // Save all the answers and then save the answers
  _renderNewQuestion() {
    const { index, indice, answers } = this.state
    const { nextScreen, saveAnswers } = this.props
    if (index < 9) {
      const numberIndex = index + 1
      const numberIndice = indice + 1
      this.setState({ index: numberIndex, indice: numberIndice })
    }
    else {
      saveAnswers(answers)
      nextScreen()
    }
  }

  render() {
    const { index, indice } = this.state
    const { questions } = this.props
    const item = questions.questions[index]

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>

          <Header title={item.category} />

          <View style={styles.card}>
            <Text style={styles.text}>{item.question}</Text>
          </View>

          <View style={styles.contentNumber}>
            <Text style={styles.number}>
              {`${indice} of 10`}
            </Text>
          </View>

          <View style={styles.contentButton}>
            <TouchableOpacity onPress={() => this._checkAnswer(true)}>
              <Text style={[styles.button, styles.buttonGreen]}>True</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this._checkAnswer(false)}>
              <Text style={[styles.button, styles.buttonRed]}>False</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>

      </View>
    )
  }
}

export default QuizScreen