import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Slideshow from './components/Slideshow';
import Tabs from './components/Tabs';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/" render={props => (
          <div>
              <Slideshow />
              <Tabs />
          </div>
        )} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
