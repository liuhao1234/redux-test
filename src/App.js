import React, { Component } from 'react';
import './assets/style.css';
import Add from './components/Add';
import Show from './components/Show';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Add />
        <Show />
      </div>
    );
  }
}

export default App;
