import React from 'react'
import { View, TextInput, Button, Alert } from 'react-native'

import styles from './styles'

class Searchbox extends React.Component {
  state = { value: '' }

  render() {
    const { onSearch } = this.props
    const { value } = this.state

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter a title"
          value={value}
          autoCorrect={false}
          onChangeText={(text) => this.setState({ value: text })}
          onSubmitEditing={() => onSearch(value)}
        />
        <Button
          title="Go!"
          onPress={() => onSearch(value)}
        />
      </View>
    )
  }
}

export default Searchbox
