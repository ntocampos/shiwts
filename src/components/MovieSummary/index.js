import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'
import Cancel from '../../../assets/cancel.png'

class MovieSummary extends React.Component {
  render() {
    const { movie } = this.props
    const { Poster, Title, Year, Genre, Director, Runtime, Plot } = movie

    return (
      <View style={styles.container}>
        <Image
          style={styles.poster}
          defaultSource={Cancel}
          source={{ uri: Poster }}
        />
        <View style={styles.summary}>
          <Text style={[styles.text, styles.title]}>
            {Title}
          </Text>
          <Text style={styles.text}>
            ({Year})
          </Text>
          <Text style={styles.text}>
            {Genre}
          </Text>
          <Text style={styles.text}>
            {Director}
          </Text>
          <Text style={styles.text}>
            {Runtime}
          </Text>
          <Text style={[styles.text, styles.plot, styles.italic]}>
            {Plot}
          </Text>
        </View>
      </View>
    )
  }
}

export default MovieSummary
