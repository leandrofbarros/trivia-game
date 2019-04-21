
// @flow

import QuestionAPI from '../apis/question-api'

export const SET_QUESTIONS = 'SET_QUESTIONS'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const RESET_GAME = 'RESET_GAME'

export const loadQuestionAction = () => {
    const questionAPI = new QuestionAPI()

    return (dispatch) => {
        questionAPI.getAllQuestion()
            .then(questions => dispatch(({ type: SET_QUESTIONS, payload: questions })))
    }
}

export const saveAnswersAction = (answers) => (dispatch) => {
        dispatch(({ type: SAVE_ANSWER, payload: answers }))
}

export const resetGameAction = () => (dispatch) => {
        dispatch(({ type: RESET_GAME }))
    }