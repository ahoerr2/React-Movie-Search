import React, { Component } from 'react'
import NavBar from './layout/NavBar'
import SearchBar from './layout/SearchBar.jsx';
export default class SearchRender extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="searchContent">
                <h1>Movie Title Database</h1>
                <h4>By Alex Hoerr</h4>
                <SearchBar/>
                </div>
            </div>
        )
    }
}
