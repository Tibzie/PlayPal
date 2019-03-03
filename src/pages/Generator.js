import React, { Component } from 'react';
import ButtonComp from '../components/ButtonComp';
import Something from '../components/Serial';

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
      <section className="generator">
        <img className="page-banner" src="./images/random-generator.jpg" alt="let's roll" />
        <hr className="horizontal-line" />

        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 className="page-header">Generator</h1>
            <p>
              This page generates a random serial number.<br />
              This serial can be used on any games.<br />
              (Nah, it's just for people who wanna test out the feature).<br />
              Click on "go" button to get your free, random serial number.
            </p>
            <ButtonComp onClick={this.handleClick} />

            <Something serialNumber={this.state.serialNumber} />
          </Col>
        </Row>
      </section>
    )
  }
}

export default Generator;
