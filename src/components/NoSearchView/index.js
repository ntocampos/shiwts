import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'
import ArrowUp from '../../../assets/arrow-up.png'

class NoSearchView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={ArrowUp}
        />
        <Text style={styles.text}>
          Search for a title you (may) want to watch in the searchbox above :)
        </Text>
      </View>
    )
  }
}

export default NoSearchView
