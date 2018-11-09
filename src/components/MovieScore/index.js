import React from 'react'
import { View, Image, Text } from 'react-native'

import styles from './styles'
import Vomit from '../../../assets/vomit.png'
import Worried from '../../../assets/worried.png'
import Happy from '../../../assets/happy.png'
import Star from '../../../assets/star.png'

class MovieScore extends React.Component {
  render() {
    const { movie } = this.props
    const { Ratings } = movie

    const finalScore = getFinalScore(Ratings)
    const conclusion = getConclusion(finalScore)

    return (
      <View style={styles.container}>
        <View style={styles.scores}>
          {Ratings.map(({ Source, Value }) => (
            <View key={Source} style={styles.score}>
              <Text style={[styles.source]}>
                {Source === 'Internet Movie Database' ? 'IMDb' : Source}
              </Text>
              <Text style={[styles.grade]}>
                {Value}
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.conclusion}>
          <Text style={[styles.finalScoreText, { borderColor: conclusion.color }]}>
            Final score:
            <Text style={[styles.finalScoreValue, { color: conclusion.color }]}>
              {` ${Math.round(finalScore * 100)}%`}
            </Text>
          </Text>
          <Image
            style={styles.image}
            source={conclusion.image}
          />
          <Text style={styles.conclusionText}>{conclusion.text}</Text>
        </View>
      </View>
    )
  }
}

const RATIO_REGEX = /^(\d+\.?\d*)\/(\d+\.?\d*)$/
const PERCENTAGE_REGEX = /^(\d+\.?\d*)%$/

const getFinalScore = (ratings) => {
  const normalized = ratings.map(({ Value: rating }) => {
    let _
    const ratio = rating.match(RATIO_REGEX)
    const percentage = rating.match(PERCENTAGE_REGEX)

    if (ratio) {
      const [_, partial, total] = ratio
      return Number(partial) / Number(total)
    } else if (percentage) {
      const [_, partial] = percentage
      return Number(partial) / 100
    } else {
      return 0.5
    }
  })

  const sum = normalized.reduce((sum, rating) => sum += rating, 0)

  return sum / ratings.length
}

const getConclusion = (finalScore) => {
  switch(true) {
    case finalScore <= 0.3: return {
      conclusion: 'horrible',
      image: Vomit,
      text: 'This is garbage. Next!',
      color: 'red',
    }
    case finalScore <= 0.5: return {
      conclusion: 'bad',
      image: Worried,
      text: 'Pretty bad, dood. Pretty bad.',
      color: 'tomato',
    }
    case finalScore <= 0.8: return {
      conclusion: 'good',
      image: Happy,
      text: 'Nice! This is a good one!',
      color: 'greenyellow',
    }
    case finalScore > 0.8: return {
      conclusion: 'excelent',
      image: Star,
      text: 'Excelent! Go watch it now!',
      color: 'springgreen',
    }
  }
}

export default MovieScore
