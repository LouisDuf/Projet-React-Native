import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../components/searchBar';
import CardMovie from '../components/cardMovie';
import { fetchMovies, fetchPopularMovies } from '../utils/api';
import { setMovies, setSelectedMovie } from '../redux/actions/movieActions';

const Master = ({navigation}) => {
  //const navigation = props.navigation
  const [searchQuery, setSearchQuery] = useState('');
  const movies = useSelector((state) => state.movie.movies);
  const dispatch = useDispatch();

  const loadMovies = useCallback(async (query = '') => {
    if (query === '') {
      const fetchedMovies = await fetchPopularMovies();
      dispatch(setMovies(fetchedMovies));
    } else {
      const fetchedMovies = await fetchMovies(query);
      dispatch(setMovies(fetchedMovies));
    }
  }, [dispatch]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      loadMovies(searchQuery);
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchQuery, loadMovies]);

  const handleMovieSelect = (movie: Movie) => {
    dispatch(setSelectedMovie(movie));
    navigation.navigate('Detail');
  }

  return (
    <View style={styles.container}>
      <SearchBar onChangeText={(text) => setSearchQuery(text)} />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardMovie movie={item} onPress={() => handleMovieSelect(item)} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Master;