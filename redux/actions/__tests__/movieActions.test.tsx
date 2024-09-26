import { setMovies, setSelectedMovie } from '../movieActions';
import movieReducer from '../../reducers/moviesReducer';

describe('movieActions', () => {
  test('should set the movies state correctly', () => {
    const movies = [{ id: 1, title: 'Movie 1' }, { id: 2, title: 'Movie 2' }];
    const action = setMovies(movies);
    const newState = movieReducer(undefined, action);
    expect(newState.movies).toEqual(movies);
  });

  test('should set the selectedMovie state correctly', () => {
    const movie = { id: 1, title: 'Movie 1' };
    const action = setSelectedMovie(movie);
    const newState = movieReducer(undefined, action);
    expect(newState.selectedMovie).toEqual(movie);
  });
});
