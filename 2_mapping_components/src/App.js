import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './components/Joke';
import jokesData from './jokesData';

class App extends Component {
  render() {
    const comp = jokesData.map(function(joke){
      return (<Joke question={joke.question} punchLine={joke.punchLine}/>);  
    })

    return(
      <div>
        {comp}
      </div>)
  }
}

export default App;
