import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'
import NotFound from '../../../assets/not-found.png'

class EmptyView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={NotFound}
        />
        <Text style={styles.text}>
          Your search didn't returned any results...
        </Text>
      </View>
    )
  }
}

export default EmptyView
