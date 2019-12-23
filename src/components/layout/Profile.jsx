import React, { Component } from 'react'
export default class Profile extends Component {
    render() {
        //let movie = {title: '', year: '', id: ''};
        console.log(this.props.Movie);
        const title = this.props.Movie !== undefined ? this.props.Movie.Title : "Movie Title";
        const year = this.props.Movie !== undefined ? this.props.Movie.Year : "Movie Year";
        return (
            <div>
                <h6>{title}</h6>
                <h6>{year}</h6>
                <h6>Movie ID</h6>
            </div>
        )
    }
}
