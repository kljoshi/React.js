import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state={
      count:0
    }
    // if you are using setState you have to bind it first
    this.handleClick = this.handleClick.bind(this);
    this.halveClick = this.halveClick.bind(this);
  }

  handleClick(){
    this.setState(function(prevState){
      return {
        count: prevState.count + 2
      }
    })
  }

  halveClick(){
    this.setState(function(prevState){
      return{
        count: prevState.count / 2
      }
    })
  }

  render(){
    return(
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Double me</button>
        <button onClick={this.halveClick}>Halve me</button>
      </div>
    )
  }
}

export default App;
