import React from 'react'
import { View, TextInput, Alert, Button } from 'react-native'

import styles from './styles'

class Searchbox extends React.Component {
  state = { value: '' }

  handleSubmit = (value) => Alert.alert(`Search button clicked w/ value "${value}"`)

  render() {
    const { value } = this.state

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter a title"
          value={value}
          autoCorrect={false}
          onChangeText={(text) => this.setState({ value: text })}
          onSubmitEditing={() => this.handleSubmit(value)}
        />
        <Button
          title="Go!"
          onPress={() => this.handleSubmit(value)}
        />
      </View>
    )
  }
}

export default Searchbox
