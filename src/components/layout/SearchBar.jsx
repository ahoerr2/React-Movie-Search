import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import SearchButton from './SearchButton';
export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <Form inline variant="light" style={{justifyContent: "center"}}>
                    <Form.Group style={{justifyContent: "center", width: "85%"}}>
                        <InputGroup style={{width: "85%"}}>
                            <Form.Control variant="light" type="search" placeholder="Enter Movie Title" />
                            <InputGroup.Append>
                                <SearchButton/>
                            </InputGroup.Append>
                        </InputGroup>
                    </Form.Group>
                    
                </Form>
            </div>
        )
    }
} 
