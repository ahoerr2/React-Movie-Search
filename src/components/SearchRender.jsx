import React, {Component} from 'react'
import NavBar from './layout/NavBar'
import SearchBar from './layout/SearchBar.jsx';
import Profile from './layout/Profile';
import Spinner from 'react-bootstrap/Spinner';
var imdb = require("imdb-api");
export default class SearchRender extends Component {
    constructor(props){
        super(props);
        this.state = {
            Movie: null,
            Loading: false,
            MovieCard: null
        }
        this.changeMovie = this.changeMovie.bind(this);
    }
    buildLink(qweryr,call){
        const API_KEY = process.env.REACT_APP_API_KEY;
        const API_LINK = process.env.REACT_APP_API_LINK;
        let API_CALL=call;
        return `${API_LINK}apikey=${API_KEY}&type=movie${API_CALL}=${qweryr}`;
        
    }
    async changeMovie(qweryr){
        this.setState({
            Loading: true
        })
        const API_KEY = process.env.REACT_APP_API_KEY;
        let res = await imdb.search({name: qweryr}, {apiKey: API_KEY});
        const ary = res.results;
        var ary2 = [];
        if(ary.length > 0){
            for(var i = 0; i < ary.length; i++){
                ary2[i] = await imdb.get({id: res.results[i].imdbid}, {apiKey: API_KEY});
            }
            console.log(ary2);
            this.setState({
                Movie: ary2,
                Loading: false
                })
        } else{
            this.setState({
                Movie: null,
                Loading: false
                })
        }



        //const res = imdb.search({name: qweryr},{apiKey: API_KEY});
        //this.setState({
        //    Movie: res
        //})
        /*qweryr = qweryr.replace(/ /g,"_");
        let API_SEARCH = this.buildLink(qweryr,"&s");
        let jes = null;
        this.setState({
            Loading: true,
            Movie: null
        })
        await fetch(API_SEARCH,{
            method: 'Get'
        })
        .then(Response => Response.json())
        .then(json => {
            this.setState({
                Movie: json.Search
            });
           
        });           
        jes = this.state.Movie;
        jes = jes.map(jes => this.buildLink(jes.imdbID,"&i"));
        await fetch(jes[0],{
            method: 'Get'
        })
        .then(Response=>Response.json())
        .then(json => {
            this.setState({
            Movie: json,
            Loading: false
        })});
        */
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
