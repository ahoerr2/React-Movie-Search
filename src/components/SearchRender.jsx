import React, { Component } from 'react'
import NavBar from './layout/NavBar'
import SearchBar from './layout/SearchBar.jsx';
import Profile from './layout/Profile';

export default class SearchRender extends Component {
    constructor(props){
        super(props);
        this.state = {
            Movie: ''
        }
        this.changeMovie = this.changeMovie.bind(this);
    }
    changeMovie(movieJson){
        this.setState({
            Movie: movieJson
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
                <Profile Movie={this.state.Movie}/>
                </div>
            </div>
        )
    }
}
