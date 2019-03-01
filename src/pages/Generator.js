import React, { Component } from 'react';
import ButtonComp from '../components/ButtonComp';
import Something from '../components/Something';

import {
  Row,
  Col
} from 'reactstrap';

class Generator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serialNumber: []
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.generateSerial();
  }
  componentDidUpdate(prevProps, prevState) {
    this.generateSerial();
  }
  generateSerial() {
    let randomChars = [...Array(16)].map(() => {
      return Math.random().toString(36).substr(2, 1);
    });
    const randStr = randomChars.join("").toUpperCase();
    const block1 = randStr.slice(0, 4);
    const block2 = randStr.slice(4, 7);
    const block3 = randStr.slice(7, 12);
    const block4 = randStr.slice(12, 16);
    return `${block1}-${block2}-${block3}-${block4}`;
  }
  handleClick(e) { 
    e.preventDefault();
    this.setState({
      serialNumber: this.generateSerial()
    });
  }
  render() {
    return (
      <div>
        <div className="page-image">
          <img src="./images/random-generator.jpg" alt="random serial number generator" />
        </div>
     
        
        <h1>Generator</h1>
        <p>This is going to be the serial number generator.</p>
        <ButtonComp onClick={this.handleClick}/>
    
        <Something serialNumber={this.state.serialNumber} />
      </div>
    )
  }
}

export default Generator;
