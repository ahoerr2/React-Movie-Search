import React, {Component} from 'react'
import NavBar from './layout/NavBar'
import SearchBar from './layout/SearchBar.jsx';
import Profile from './layout/Profile';
import Spinner from 'react-bootstrap/Spinner';
import { Container, Row, Col } from 'react-bootstrap';

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
        for(var j = 0; j < ary.length; j++){
            if(ary[j].type !== "movie"){
                ary.splice(j,1);
                j--;
            }
        }
        var ary2 = [];
        if(ary.length > 0){
            for(var i = 0; i < ary.length; i++){
                let movie = await imdb.get({id: res.results[i].imdbid}, {apiKey: API_KEY});
                ary2[i] = movie; 
                this.setState({
                    Movie: ary2,
                    Loading: false
                    })
            }
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
                    {
                        this.state.Loading ? 
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner> : 
                    this.state.Movie ? 
                    <div className="Cards">
                        <Container>
                            <Row>
                        { this.state.Movie.length > 1 ?this.state.Movie.map((Movie,i) => (
                            <Col lg="3" key={i}>
                                <Profile Movie={Movie} key={i}/>
                            </Col>
                        )) : <Profile Movie={this.state.Movie} key={0}/>}
                            </Row>
                        </Container>
                    </div> : <h6>No Movies Found</h6>
                    }
                </React.Fragment>
                </div>
            </div>
        )
    }
}
