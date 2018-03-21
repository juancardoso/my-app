import React from 'react';
import Post from './Post';

export default class App extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <Post title="Testando o React"/>
                <Post title="Testando o React 2"/>
                <Post title="Testando o React 3"/>
            </div>
        );
    }
}