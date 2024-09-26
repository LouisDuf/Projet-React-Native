export const setMovies = (movies) => {
  return {
    type: 'SET_MOVIES',
    payload: movies,
  };
};

export const setSelectedMovie = (movie) => {
  return {
    type: 'SET_SELECTED_MOVIE',
    payload: movie,
  };
};