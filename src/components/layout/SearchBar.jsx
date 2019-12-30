import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import SearchButton from './SearchButton';

export default class SearchBar extends Component {
    
    constructor(props){
        super(props)
        this.state={
            qwery: ''
        }
        this.search = this.search.bind(this);
        
    }

    search(){
        const API_KEY = "88961100";
        const API_LINK = "http://www.omdbapi.com/?";
        const API_SEARCH = `${API_LINK}apikey=${API_KEY}&type=movie&s=${this.state.qwery}`;
        console.log(API_SEARCH);
        fetch(API_SEARCH,{
            method: 'Get'
        })
        .then(Response => Response.json())
        .then(json => {
            const title = json.Search[0];
            this.props.onSearch(title);
        });
        
    }
    render() {
        return (
            <div>
                <Form inline variant="light" style={{justifyContent: "center"}}>
                    <Form.Group style={{justifyContent: "center", width: "85%"}}>
                        <InputGroup style={{width: "85%"}}>
                            <Form.Control 
                            variant="light" 
                            type="search" 
                            placeholder="Enter Movie Title" 
                            onChange={event => {this.setState({qwery: event.target.value})}}
                            onKeyPress={event => {
                                if(event.key === 'Enter'){
                                    this.search()
                                }
                            }}
                            />
                            <InputGroup.Append>
                                <SearchButton onClick={this.search}/>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                </Form>
            </div>
        )
    }
} 
