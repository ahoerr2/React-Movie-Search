import React, { Component } from "react";
import {Card} from 'react-bootstrap';
import * as url from '../images/nf.jpg';
export default class Profile extends Component {
  constructor(props){
    super(props)
    this.cutSummary = this.cutSummary.bind(this);
  }

  cutSummary(plot){
    plot = plot.substring(0,197);
    let space = plot.lastIndexOf(" ");
    plot = plot.substring(0,space);
    return plot + "...";
  }
  render() {
    let movie = {title: 'Title Unavaliable', year: 'Year Unavaliable', plot: 'No Summary Avaliable', poster:url.default}
    
    if (this.props.Movie !== null) {
        movie = this.props.Movie;
    }
    const title =
      movie.Title !== null
        ? movie.title
        : "Error title";
    const year =
      movie.year !== undefined
        ? "Release Year: " + movie.year
        : "Error Year";
    const plot =
      movie.plot !== undefined
        ? movie.plot = movie.plot.length < 200 ? movie.plot : this.cutSummary(movie.plot)
        : "Error Plot";

        const poster =
        movie.poster !== "N/A"
          ? movie.poster
          : url.default;
    

    const widthVar = "17rem";
    const heightVar = "21rem";
    return (
      <Card bg="light" text="dark" style={{width: widthVar}}>
        <Card.Img variant='top' src={poster} style={{height: heightVar}}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
    <Card.Subtitle>Released: {year}</Card.Subtitle>
    <Card.Text>{plot}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
