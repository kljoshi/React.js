import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      firstName: "",
      lastName: "",
      isFriendly: true,
      gender: "",
      favColor: "blue"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    const {name, value, type, checked} = event.target;
    type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
  }

  handleSubmit(){

  }
  
  render() {
    return (
      <form onSubmit ={this.handleSubmit}>
        <input type="text" 
          value={this.state.firstName}
          name="firstName"
          placeholder="firstName"
          onChange={this.handleChange} 
        />

        <br />

        <input type="text" 
          value={this.state.lastName} 
          name="lastName" 
          placeholder="lastName" 
          onChange={this.handleChange} 
        />

        {/* textArea */}

        <textarea value={"Some default value"}/>
        <br/>
        <label>
          <input 
            type="checkbox"
            name="isFriendly"
            checked={this.state.isFriendly}
            onChange={this.handleChange} 
          /> 
          Is isFriendly ?
        </label>

        <br />

        <label>
          <input 
            type="radio"
            name="gender"
            value="male"
            checked={this.state.gender === "male"}
            onChange={this.handleChange} 
          /> 
          Male
        </label>

        <br />

        <label>
          <input 
            type="radio"
            name="gender"
            value="female"
            checked={this.state.gender === "female"}
            onChange={this.handleChange} 
          /> 
          Female
        </label>
        <br />
        <label> Favorite color:
          <select 
            value={this.state.favColor} 
            onChange={this.handleChange}
            name="favColor">

            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="red">Red</option>
            <option value="orange">Orange</option>
            <option value="yellow">Yellow</option>
          </select>
        </label>


        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are a {this.state.gender}</h2>
        <h2>Your Favorite color is {this.state.favColor}</h2>
        <button>Submit</button>
      </form>
    );
  }
}

export default App;
