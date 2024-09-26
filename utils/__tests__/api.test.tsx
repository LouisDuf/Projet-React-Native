import { fetchMovies } from '../api';

describe('fetchMovies', () => {
  test('should return an ObservableArray of movies', async () => {
    const movies = await fetchMovies();
    expect(Array.isArray(movies)).toBe(true);
    expect(movies.length).toBeGreaterThan(0);
    expect(movies[0].title).toBeDefined();
    expect(movies[0].overview).toBeDefined();
    expect(movies[0].poster_path).toBeDefined();
    expect(movies[0].vote_average).toBeDefined();
    expect(movies[0].release_date).toBeDefined();
  });

  test('should return an empty ObservableArray if no results are found', async () => {
    const movies = await fetchMovies('zzzzz');
    expect(Array.isArray(movies)).toBe(true);
    expect(movies.length).toBe(0);
  });
});
