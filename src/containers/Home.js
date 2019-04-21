// @flow

import { connect } from "react-redux"
import HomeScreen from "../screens/Home/HomeScreen"
import { loadQuestionAction } from "../actions/question"

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadQuestion: () => dispatch(loadQuestionAction()),
  nextScreen: () => ownProps.navigation.navigate("Quiz")
})

export default connect(
  undefined,
  mapDispatchToProps
)(HomeScreen)