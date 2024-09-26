import { observable } from 'mobx';
import { ActionType } from '../actions/movieActions';
import Movie from '../../models/Movie';

export interface MovieState {
  movies: any; // Remplacez le type "any[]" par "ObservableArray<Movie>"
  selectedMovie: any;
}

const initialState: MovieState = {
  movies: observable([]), // Initialisez avec une ObservableArray
  selectedMovie: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return { ...state, movies: action.payload };
    case 'SET_SELECTED_MOVIE':
      return { ...state, selectedMovie: action.payload };
    default:
      return state;
  }
};

export default movieReducer;