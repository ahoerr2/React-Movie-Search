import React, { Component } from "react";
import * as url from '../images/nf.jpg';
export default class Profile extends Component {
  render() {
    let movie = {Title: 'Title Unavaliable', Year: 'Year Unavaliable', imdbID: 'ID Not Found',Poster:url.default}
    
    if (this.props.Movie !== null) {
        movie = this.props.Movie;
    }

    const title =
      movie.Title !== null
        ? movie.Title
        : "Movie Title";
    const year =
      movie.Year !== undefined
        ? "Release Year: " + movie.Year
        : "Movie Year";
    const id =
      movie.imdbID !== undefined
        ? "ID: " + movie.imdbID
        : "Movie ID";
        const poster =
        movie.Poster !== undefined
          ? movie.Poster
          : url.default;
    
    return (
      <div className="profile">
        <img
          className="profile-img"
          alt="error"
          src={poster}
        />
        <div className="profile-atb">
          <div className="profile-title">
            <h6>{title}</h6>
          </div>
          <div className="profile-year">
            <h6>{year}</h6>
          </div>
          <div className="profile-id">
            <h6>{id}</h6>
          </div>
        </div>
      </div>
    );
  }
}
