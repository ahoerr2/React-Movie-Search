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
        const API_KEY = process.env.REACT_APP_API_KEY;
        const API_LINK = process.env.REACT_APP_API_LINK;
        const API_SEARCH = `${API_LINK}apikey=${API_KEY}&type=movie&s=${this.state.qwery}`;
        console.log(API_SEARCH);
        this.props.onSearch(this.state.qwery);
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
