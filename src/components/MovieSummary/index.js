import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'
import Cancel from '../../../assets/cancel.png'

class MovieSummary extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>@ MovieSummary component</Text>
      </View>
    )
  }
}

export default MovieSummary
