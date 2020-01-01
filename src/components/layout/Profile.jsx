import React, { Component } from 'react'
export default class Profile extends Component {
    render() {
        //let movie = {title: '', year: '', id: ''};
        if(this.props.Movie !== undefined){
            console.log(this.props.Movie);
        }
        
        const title = this.props.Movie.Title !== undefined ? this.props.Movie.Title : "Movie Title";
        const year = this.props.Movie.Year !== undefined ? this.props.Movie.Year : "Movie Year";
        const id = this.props.Movie.imdbID !== undefined ? this.props.Movie.imdbID : "Movie ID";
        return (
            <div>
                <h6>{title}</h6>
                <h6>{year}</h6>
                <h6>{id}</h6>
            </div>
        )
    }
}
