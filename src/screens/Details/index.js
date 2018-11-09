import React from 'react'
import { View, Text } from 'react-native'

import styles from './styles'
import MovieSummary from '../../components/MovieSummary'
import MovieScore from '../../components/MovieScore'

class Details extends React.Component {
  render() {
    const { navigation } = this.props
    const title = navigation.getParam('imdbID')

    return (
      <View style={styles.container}>
        <Text>@ Details screen. Param: {title}</Text>
        <MovieSummary />
        <MovieScore />
      </View>
    )
  }
}

export default Details
