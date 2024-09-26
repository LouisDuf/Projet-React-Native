import { observable } from 'mobx';
import Movie from '../models/Movie';
import axios from 'axios';

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (searchQuery: string = '') => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=fr-FR`
    );
    const movies = response.data.results.map(
      (movieData: any) => new Movie(movieData)
    );
    return observable(movies); // Retournez une ObservableArray
  } catch (error) {
    console.error('Error fetching movies:', error);
    return observable([]);
  }
};

export const fetchPopularMovies = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR`
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
};

export const fetchMovieDetails = async (id: number) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=fr-FR`
  );
  return await response.json();
};
