import React from 'react'
import { View, ActivityIndicator } from 'react-native'

import styles from './styles'

class LoadingView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color="darkblue"
        />
      </View>
    )
  }
}

export default LoadingView
