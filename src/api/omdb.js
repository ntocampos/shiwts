import { OMDB_API_KEY } from '../../env/dev'

const BASE_URL = `http://www.omdbapi.com/?apikey=${OMDB_API_KEY}`

export default {
  search: async (query) => {
    const PATH = `${BASE_URL}&s=${query}`
    try {
      const raw = await fetch(PATH)
      const response = await raw.json()

      if (response.Response === 'True') {
        return response.Search
      }

      throw new Error(response.Error)
    } catch(error) {
      throw error
    }
  },
  find: async (titleId) => {
    const PATH = `${BASE_URL}&i=${titleId}`
    try {
      const raw = await fetch(PATH)
      const response = await raw.json()

      if (response.Response === 'True') {
        return response
      }

      throw new Error(response.Error)
    } catch(error) {
      throw error
    }
  },
}
