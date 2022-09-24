import axios from 'axios'

const BASE_URL = 'https://gogoanime2.p.rapidapi.com'

const options = {

  url: BASE_URL,
  headers: {
    'X-RapidAPI-Key':process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'gogoanime2.p.rapidapi.com'
  }
};
export const fetchFromAPI = async (url)=>{
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
}

export const fetchSearchTerm = async (searchTerm)=>{
  const { data } = await axios.get(`${BASE_URL}/search${searchTerm}`, options)
  return data;
}
export const fetchPopular = async ()=>{
  const { data } = await axios.get(`${BASE_URL}/popular`, options)
  return data;
}

export const fetchTopAiring = async ()=>{
  const { data } = await axios.get(`${BASE_URL}/top-airing`, options)
  return data;
}

export const fetchRecentRelease = async ()=>{
  const { data } = await axios.get(`${BASE_URL}/recent-release`, options)
  return data;
}

export const fetchAnimeDetails = async (animeName)=>{
  const { data } = await axios.get(`${BASE_URL}/anime-details/${animeName}`, options)
  return data;
}

export const fetchMovies = async ()=>{
  const { data } = await axios.get(`${BASE_URL}/anime-movies?aph=A&?page=7`, options)
  return data;
}

export const fetchGenre = async (genre)=>{
  const { data } = await axios.get(`${BASE_URL}/genre/${genre}`, options)
  return data;
}


