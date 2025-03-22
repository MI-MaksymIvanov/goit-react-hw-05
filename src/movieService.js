import axios from "axios";

const url = "https://api.themoviedb.org/3/";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNzU1MGYwNWM2MmExNjkxZGQ3NDdmYjcyNDEyYmFiMyIsIm5iZiI6MTc0MjQ3MTIyNC45NTEsInN1YiI6IjY3ZGMwMDM4ZmVjNThhYTNjNWU5ZjNkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mQOUrA3D3IDv7kq6_jo2udmkMa42PdKEX2Ro2MoT3n0",
  },
};

//https://api.themoviedb.org/3/trending/movie/day
export const fetchTopMovies = async () => {
  const resp = await axios.get(`${url}/trending/movie/day?page=1`, options);
  return resp.data.results;
};

//https://api.themoviedb.org/3/movie/movie_id
export const fetchMovieById = async (movieId) => {
  const resp = await axios.get(`${url}movie/${movieId}`, options);
  return resp.data;
};

//https://api.themoviedb.org/3/movie/movie_id/credits
export const fetchMovieCast = async (movieId) => {
  const resp = await axios.get(`${url}movie/${movieId}/credits`, options);
  return resp.data.cast;
};

// https://api.themoviedb.org/3/movie/movie_id/reviews
export const fetchMovieReviews = async (movieId) => {
  const resp = await axios.get(`${url}movie/${movieId}/reviews`, options);
  return resp.data.results;
};

//https://api.themoviedb.org/3/search/movie
export const fetchByQuery = async (query) => {
  const resp = await axios.get(
    `${url}search/movie?query=${query}&page=1`,
    options
  );
  return resp.data.results;
};
