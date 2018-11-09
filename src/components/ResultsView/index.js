import React from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  Alert,
  TouchableHighlight,
} from 'react-native'

import styles from './styles'
import Cancel from '../../../assets/cancel.png'

class ResultsView extends React.Component {
  keyExtractor = (item) => item.imdbID

  renderListItem = ({ item }) => {
    const { onSelect } = this.props
    const {
      Title,
      Year,
      imdbID,
      Type,
      Poster,
    } = item

    return (
      <TouchableHighlight
        underlayColor="lightgray"
        onPress={() => onSelect(imdbID)}
      >
        <View style={styles.item}>
          <Image
            style={styles.poster}
            defaultSource={Cancel}
            source={{ uri: Poster }}
          />
          <View style={styles.description}>
            <Text style={styles.title}>{Title}</Text>
            <Text style={styles.subtitle}>({Year})</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    const { data } = this.props

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderListItem}
        />
      </View>
    )
  }
}

export default ResultsView
