// @flow

import { createStackNavigator } from "react-navigation"
import HomeScreen from "../containers/Home"
import QuizScreen from "../containers/Quiz"
import ResultScreen from "../containers/Result"

const Routes = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Quiz: {
      screen: QuizScreen
    },
    Result: {
      screen: ResultScreen
    }
  },
  {
    headerMode: "none",
    headerVisible: false,
    initialRouteName: "Home"
  }
)

export default Routes
