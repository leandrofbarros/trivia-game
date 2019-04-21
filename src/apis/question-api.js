// @flow

import QuestionMS from '../micro-services/question-ms'
import { Question } from '../types'

type GetAllQuestionResponse = Array<Question>

class QuestionApi {
    _questionMS: QuestionMS

    constructor() {
        this._questionMS = new QuestionMS()
    }

    getAllQuestion(): GetAllQuestionResponse {
        return this._questionMS.getQuestionFromApi()
            .then(responseJSON => responseJSON.map(item => QuestionApi._mapQuestionFromJSON(item)))
    }

    static _unescapeHtml(str) {
        const map = { amp: '&', lt: '<', le: '≤', gt: '>', ge: '≥', quot: '"', '#039': "'" }
        return str.replace(/&([^;]+);/g, (m, c) => map[c] || '')
    }

    static _mapQuestionFromJSON(obj): Question {

        const category = QuestionApi._unescapeHtml(obj.category)
        const quest = QuestionApi._unescapeHtml(obj.question)

        const question = {
            category: category,
            question: quest,
            correct_answer: obj.correct_answer,
        }
        return question
    }
}

export default QuestionApi
