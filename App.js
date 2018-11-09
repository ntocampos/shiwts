import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './src/screens/Home'
import DetailsScreen from './src/screens/Details'

const routes = {
  Home: HomeScreen,
  Details: DetailsScreen,
}

const config = {
  initialRouteName: 'Details',
  // initialRouteParams: { imdbID: 'tt4116284' },
  navigationOptions: {
    header: null,
  }
}

const RootStack = createStackNavigator(routes, config)

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    )
  }
}
