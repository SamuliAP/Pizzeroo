import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import PizzeriasTable from './components/PizzeriasTable'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header/>
        <PizzeriasTable/>
      </div>
    );
  }
}

export default App;
