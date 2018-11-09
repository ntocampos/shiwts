import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    borderTopColor: 'lightgray',
    borderTopWidth: 1,
  },
  separator: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 10,
    color: 'gray'
  },
  item: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  poster: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  description: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  subtitle: {
    color: 'gray',
  },
})
