import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <footer>
        <Row>
          <Col sm={{ size: 10, offset: 1 }}>
            Terms and conditions apply.<br />
            Copyright 2019, PlayPal
          </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer;
