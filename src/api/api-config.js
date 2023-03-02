const key = process.env.TMDB_KEY;

const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: key,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;