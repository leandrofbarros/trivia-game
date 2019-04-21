// @flow

import { Question } from '../types'

type GetAllQuestionResponse = Array<Question>

class QuestionMS {

  async getQuestionFromApi(): GetAllQuestionResponse {
    try {
      const response = await fetch(
        'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
      )
      const responseJson = await response.json()
      return responseJson.results
    } catch (error) {
      console.error(error)
    }
  }

}

export default QuestionMS