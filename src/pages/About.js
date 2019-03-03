import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class About extends Component {
  render() {
    return (
      <section>
        <img className="page-banner" src="./images/about-us.jpg" alt="about us" />
        <hr className="horizontal-line" />
        <Row>
          <Col sm={{ size: 10, offset: 1 }}>
            <h1 className="page-header">About us</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
        </Row>

        <Row>
          <Col sm={{ size: 10, offset: 1 }}>
            <h2 className="subpage-header">History</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
        </Row>

        <Row>
          <Col sm={{ size: 10, offset: 1 }}>
            <h2 className="subpage-header">Tournaments</h2>
            <p>We also hosts tournaments on a monthly basis where you can win great prizes.<br />Such as:</p>
            <ul className="list">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </Col>
        </Row>


      </section>
    )
  }
}

export default About;