import React from 'react';

export default class Post extends React.Component{
    render(){
        return(
            <p>{this.props.text}</p>
        );
    }
}