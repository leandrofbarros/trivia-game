// @flow

import { connect } from "react-redux"
import ResultScreen from "../screens/Result/ResultScreen"
import { resetGameAction } from "../actions/question"

const mapStateToProps = state => ({
  answers: state.question.answers,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  resetGame: () => dispatch(resetGameAction()),
  nextScreen: () => ownProps.navigation.navigate("Home")
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultScreen)
