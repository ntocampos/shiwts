import React from 'react'
import { View } from 'react-native'

import styles from './styles'
import Searchbox from './../../components/Searchbox'
import ResultsView from './../../components/ResultsView'

class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Searchbox />
        <ResultsView />
      </View>
    )
  }
}

export default Home
