// @flow

import Store from '../store/questions'

export const initialState = Store

export default function appReducer(state = initialState, action) {

  switch (action.type) {
    case 'SET_QUESTIONS': {
      return {
        ...state,
        questions: action.payload,
      }
    }
    case 'SAVE_ANSWER': {
      return {
        ...state,
        answers: action.payload,
      }
    }
    case 'RESET_GAME': {
      return {
        ...state,
        questions: [],
        answers: [],
      }
    }
    default:
      return state
  }
}
