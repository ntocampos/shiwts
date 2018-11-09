import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'
import Vomit from '../../../assets/vomit.png'
import Worried from '../../../assets/worried.png'
import Happy from '../../../assets/happy.png'
import Star from '../../../assets/star.png'

class MovieScore extends React.Component {
  render() {

    return (
      <View style={styles.container}>
        <Text>@ MovieScore component</Text>
      </View>
    )
  }
}

export default MovieScore
