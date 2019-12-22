import React, { Component } from 'react'
import NavBar from './layout/NavBar'
import SearchBar from './layout/SearchBar.jsx';

export default class SearchRender extends Component {
    constructor(props){
        super(props);
        this.state = {
            Artist: ''
        }
        this.changeArtist = this.changeArtist.bind(this);
    }
    changeArtist(newArtist){
        this.setState({
            Artist: newArtist
        })
    }
    render() {
        return (
            <div>
                <NavBar/>
                <div className="searchContent">
                <h1>Movie Title Database</h1>
                <h4>By Alex Hoerr</h4>
                <SearchBar onSearch={this.changeArtist}/>
                <h5>Artist: {this.state.Artist}</h5>
                </div>
            </div>
        )
    }
}
