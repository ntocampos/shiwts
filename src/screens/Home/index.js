import React from 'react'
import { View } from 'react-native'

import styles from './styles'
import Searchbox from './../../components/Searchbox'
import ResultsView from './../../components/ResultsView'
import LoadingView from '../../components/LoadingView'
import EmptyView from '../../components/EmptyView'
import NoSearchView from '../../components/NoSearchView'

class Home extends React.Component {
  renderContent() {
    if (true) {
      return <LoadingView />
    } else if (true) {
      return <EmptyView />
    } else if (true) {
      return <NoSearchView />
    } else {
      return (
        <ResultsView />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Searchbox />
        {this.renderContent()}
      </View>
    )
  }
}

export default Home
