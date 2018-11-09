import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  poster: {
    flex: 1,
    width: 175,
    height: 280,
  },
  summary: {
    flex: 1,
    marginLeft: 20,
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
  },
  plot: {
    fontSize: 13,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 0,
  },
  italic: {
    fontStyle: 'italic',
  }
})
