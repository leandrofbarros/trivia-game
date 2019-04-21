// @flow

import { connect } from "react-redux"
import QuizScreen from "../screens/Quiz/QuizScreen"
import { saveAnswersAction } from "../actions/question"

const mapStateToProps = state => ({
  questions: state.question,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  saveAnswers: (answers) => dispatch(saveAnswersAction(answers)),
  nextScreen: () => ownProps.navigation.navigate("Result")
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizScreen)
