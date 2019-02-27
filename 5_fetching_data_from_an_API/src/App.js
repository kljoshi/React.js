import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      jsonData: {}
    }
  }

  componentDidMount() {
    this.setState({
      loading: true
    })

    fetch("https://swapi.co/api/people/1/")
      .then(response => response.json())
      .then(myJson => {
        this.setState({
          loading: false,
          jsonData: myJson
        })
      })
  }


  render() {
    const text = this.state.loading ? "loading..." : this.state.jsonData.name;
    return(
      <div>
        <p>{text}</p>
      </div>
    )

  }
}

export default App;
