import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './styles'
import OMDb from '../../api/omdb'
import LoadingView from '../../components/LoadingView'
import MovieSummary from '../../components/MovieSummary'
import MovieScore from '../../components/MovieScore'

class Details extends React.Component {
  render() {
    const movie = MOCK

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

const MOCK = {
  Title: "Blade Runner 2049",
  Year: "2017",
  Rated: "R",
  Released: "06 Oct 2017",
  Runtime: "164 min",
  Genre: "Drama, Mystery, Sci-Fi, Thriller",
  Director: "Denis Villeneuve",
  Writer: "Hampton Fancher (screenplay by), Michael Green (screenplay by), Hampton Fancher (story by), Philip K. Dick (based on characters from the novel \"Do Androids Dream of Electric Sheep?\" by)",
  Actors: "Ryan Gosling, Dave Bautista, Robin Wright, Mark Arnold",
  Plot: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
  Language: "English, Finnish, Japanese, Hungarian, Russian, Somali, Spanish",
  Country: "USA, UK, Hungary, Canada",
  Awards: "Won 2 Oscars. Another 81 wins & 131 nominations.",
  Poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "8.0/10"
    },
    {
      Source: "Rotten Tomatoes",
      Value: "87%"
    },
    {
      Source: "Metacritic",
      Value: "81/100"
    }
  ],
  Metascore: "81",
  imdbRating: "8.0",
  imdbVotes: "340,950",
  imdbID: "tt1856101",
  Type: "movie",
  DVD: "16 Jan 2018",
  BoxOffice: "$91,800,042",
  Production: "Warner Bros. Pictures",
  Website: "http://bladerunnermovie.com",
  Response: "True"
}

export default Details
