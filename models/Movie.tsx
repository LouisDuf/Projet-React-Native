import { observable, makeAutoObservable } from 'mobx';

class Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;

  constructor(movieData: any) {
    this.id = movieData.id;
    this.title = movieData.title;
    this.overview = movieData.overview;
    this.poster_path = movieData.poster_path;
    this.vote_average = movieData.vote_average;
    this.release_date = movieData.release_date;

    makeAutoObservable(this);
  }
}

export default Movie;