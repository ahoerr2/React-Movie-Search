import React, {Component} from 'react'
import NavBar from './layout/NavBar'
import SearchBar from './layout/SearchBar.jsx';
import Profile from './layout/Profile';
import Spinner from 'react-bootstrap/Spinner';
export default class SearchRender extends Component {
    constructor(props){
        super(props);
        this.state = {
            Movie: null,
            Loading: false
        }
        this.changeMovie = this.changeMovie.bind(this);
    }
    changeMovie(API_SEARCH){
        this.setState({
            Loading: true,
            Movie: null
        })
        fetch(API_SEARCH,{
            method: 'Get'
        })
        .then(Response => Response.json())
        .then(json => {
            this.setState({
                Movie: json.Search,
                Loading: false
            })
        });

        


    }
    


    render() {
        return (
            <div>
                <NavBar/>
                <div className="searchContent">
                <h1>Movie Title Database</h1>
                <h4>By Alex Hoerr</h4>
                <SearchBar onSearch={this.changeMovie} loading={this.state.Loading}/>
                <React.Fragment>
                    {this.state.Movie ? 
                    <div className="Column">
                        {this.state.Movie.map((Movie,i) => (
                            <Profile Movie={Movie} key={i}/>
                        ))}
                    </div> : 
                    (this.state.Loading ? 
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner> : <h6>No Movies Found</h6>)}
                </React.Fragment>
                </div>
            </div>
        )
    }
}
