import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { fetchMovieDetails } from '../utils/api';
import { getPosition, storePosition } from '../utils/storage';

const Detail = ({ navigation }) => {
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);

  useEffect(() => {
    const loadMovieDetails = async () => {
      const details = await fetchMovieDetails(selectedMovie.id);
      console.log(details);
    };

    const storeLastPosition = async () => {
      const position = await getPosition();
      await storePosition(position + 1);
    };

    if (selectedMovie) {
      loadMovieDetails();
      storeLastPosition();
    } else {
      navigation.goBack();
    }
  }, [selectedMovie]);

  if (!selectedMovie) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${selectedMovie.poster_path}`,
        }}
      />
      <Text style={styles.title}>{selectedMovie.title}</Text>
      <Text style={styles.overview}>{selectedMovie.overview}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 450,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  overview: {
    paddingHorizontal: 15,
    textAlign: 'justify',
  },
});

export default Detail;