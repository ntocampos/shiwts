import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  scores: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  score: {
    flex: 1,
    alignItems: 'center',
  },
  source: {
    fontSize: 12,
  },
  grade: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 3,
  },
  conclusion: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  image: {
    width: 75,
    height: 75,
  },
  finalScoreText: {
    fontSize: 18,
    paddingVertical: 0,
    paddingHorizontal: 15,
    textTransform: 'uppercase',
    borderWidth: 2,
    borderRadius: 18,
  },
  finalScoreValue: {
    fontWeight: '600',
  },
  conclusionText: {
    fontSize: 22,
    fontWeight: '500',
  }
})
