import React from 'react';

export default class InputField extends React.Component{
    constructor(props){
        super(props);
        this.handleKeyUp = this.handleKeyUp.bind(this);
    }

    handleKeyUp(event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            this.props.clickHandler();
        }
    }

    render(){
        return(
            <input className="main-search-field" type="search" placeholder="Search..."
                   id="search-field" onKeyUp={this.handleKeyUp}/>
        );
    }
}