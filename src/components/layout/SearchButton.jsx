import React from 'react';
import {IconContext} from 'react-icons';
import {FaSearch} from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
export default class SearchButton extends React.Component{
    render(){
        return(
            <Button variant="light" type="button" onClick={this.props.onClick} disabled={this.props.disabled}>
                <IconContext.Provider value={{ color: "black", className: "global-class-name" }}>
                    <FaSearch/>
                </IconContext.Provider>
            </Button>

        );
    }
}