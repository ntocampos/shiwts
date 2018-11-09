import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'
import OMDb from '../../api/omdb'
import LoadingView from '../../components/LoadingView'
import MovieSummary from '../../components/MovieSummary'
import MovieScore from '../../components/MovieScore'

class Details extends React.Component {
  state = {
    movie: null,
    isFetching: false,
    error: null,
  }

  async componentDidMount() {
    const { navigation } = this.props
    const imdbId = navigation.getParam('imdbID')

    try {
      const movie = await OMDb.find(imdbId)
      this.setState({ movie })
    } catch(e) {
      console.error(e)
    }
  }

  render() {
    const { movie } = this.state

    if (!movie) {
      return <LoadingView />
    }

    return (
      <View style={styles.container}>
        <MovieSummary movie={movie} />
        <MovieScore movie={movie} />
      </View>
    )
  }
}

export default Details
