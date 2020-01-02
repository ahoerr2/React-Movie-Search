import React, { Component } from "react";
import * as url from '../images/nf.jpg';
export default class Profile extends Component {
  render() {
    let movie = {title: 'Title Unavaliable', year: 'Year Unavaliable', metascore: 'Score Not Found',poster:url.default}
    
    if (this.props.Movie !== null) {
        movie = this.props.Movie;
    }

    const title =
      movie.Title !== null
        ? movie.title
        : "Movie Title";
    const year =
      movie.year !== undefined
        ? "Release Year: " + movie.year
        : "Movie Year";
    const id =
      movie.metascore !== undefined
        ? "Metascore: " + movie.metascore
        : "Metascore";
        const poster =
        movie.poster !== undefined
          ? movie.poster
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
