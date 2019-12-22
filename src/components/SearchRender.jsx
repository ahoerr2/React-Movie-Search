import React, { Component } from 'react'
import NavBar from './layout/NavBar'
import SearchBar from './layout/SearchBar.jsx';

export default class SearchRender extends Component {
    constructor(props){
        super(props);
        this.state = {
            Movie: ''
        }
        this.changeMovie = this.changeMovie.bind(this);
    }
    changeMovie(newMovie){
        this.setState({
            Movie: newMovie
        })
    }
    render() {
        return (
            <div>
                <NavBar/>
                <div className="searchContent">
                <h1>Movie Title Database</h1>
                <h4>By Alex Hoerr</h4>
                <SearchBar onSearch={this.changeMovie}/>
                <h5>Movie: {this.state.Movie}</h5>
                </div>
            </div>
        )
    }
}
