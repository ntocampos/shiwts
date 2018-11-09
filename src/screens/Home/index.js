import React from 'react'
import { View, Alert } from 'react-native'

import styles from './styles'
import OMDb from '../../api/omdb'
import Searchbox from './../../components/Searchbox'
import LoadingView from '../../components/LoadingView'
import EmptyView from '../../components/EmptyView'
import NoSearchView from '../../components/NoSearchView'
import ResultsView from './../../components/ResultsView'

class Home extends React.Component {
  state = {
    searchResults: null,
    isFetching: false,
    error: null,
  }

  handleSearch = async (query) => {
    this.setState({
      searchResults: null,
      isFetching: true,
      error: null,
    })

    try {
      const data = await OMDb.search(query)

      this.setState({
        searchResults: data,
        isFetching: false,
      })
    } catch (e) {
      this.setState({
        error: e,
        isFetching: false,
      })
    }
  }

  handleSelect = (imdbID) => {
    const { navigation } = this.props
    navigation.navigate('Details', { imdbID })
  }

  renderContent() {
    const { searchResults, error, isFetching } = this.state

    if (isFetching) {
      return <LoadingView />
    } else if (error) {
      return <EmptyView />
    } else if (!searchResults) {
      return <NoSearchView />
    } else {
      return (
        <ResultsView
          data={searchResults}
          onSelect={this.handleSelect}
        />
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Searchbox onSearch={this.handleSearch} />
        {this.renderContent()}
      </View>
    )
  }
}

export default Home
