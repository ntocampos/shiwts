import { OMDB_API_KEY } from '../../env/dev'

const BASE_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}`

export default {
  search: async (query) => {
    const PATH = `${BASE_URL}&s=${query}`
    try {
      const response = await fetch(PATH)
      if (response.Response === 'True') {
        return response.Search
      }

      throw new Error(response.Error)
    } catch(error) {
      console.error(error)
    }
  },
  find: (titleId) => {
    const PATH = `${BASE_URL}&i=${titleId}`
    try {
      const response = await fetch(PATH)
      if (response.Response === 'True') {
        return response
      }

      throw new Error(response.Error)
    } catch(error) {
      console.error(error)
    }
  },
}
