const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
    fetchNetflixOriginals: `/trending/tv/week?api_key=${API_KEY}&with_networks=213`,
    fetchTrending: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchWar: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
    fetchRomantic: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchAdventure: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}`,
}

export default requests;