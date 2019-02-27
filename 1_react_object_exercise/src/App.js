import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ContactCard from './components/ContactCard';

class App extends Component {
  render() {
    return (
        <div className="contact">
          <ContactCard 
            contact={{
              imgSrc:"http://placekitten.com/400/200",
              name:"Fluffykins",
              phone:"(255)775-0000",
              email:"fluffy@meow.com"
            }}/>
          <ContactCard 
            contact={{
              imgSrc:"http://placekitten.com/300/200",
              name: "Mr. Whiskerso",
              phone: "(212)555-1212",
              email: "mr.whiskerson@meow.com"
            }}/>
          <ContactCard 
            contact={{
              imgSrc:"http://placekitten.com/400/300",
              name:"Destroyer",
              phone:"(444)787-8998",
              email:"destroyer@meow.com"
          }}/>
          <ContactCard 
            contact={{
              imgSrc:"http://placekitten.com/200/100",
              name:"Felix",
              phone:"(111)879-8778",
              email:"fellix@meow.com"
          }}/>
      </div>
    );
  }
}

export default App;
