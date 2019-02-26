import React, { Component } from 'react';

import './App.css';
import Navigation from './components/Navigation';
import Slideshow from './components/Slideshow';
import Tabs from './components/Tabs';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Slideshow />
        <Tabs />
        <Footer />
      </div>
    );
  }
}

export default App;
