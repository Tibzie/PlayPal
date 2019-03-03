import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Contact extends Component {
  render() {
    return (
      <section>
        <img className="page-banner" src="./images/feedback.jpg" alt="feedback" />
        <hr className="horizontal-line" />

        <Row>
          <Col sm={{ size: 8, offset: 2 }}>
            <h1 className="page-header">Contact us</h1>
            <p>
              Have you got any questions?<br />
              Feel free to message us and we will reply asap.
            </p>
            <table border="0">
              <tr>
                <th>Telephone number:</th>
                <th>Email Address:</th>
                <th>Address:</th>
              </tr>
              <tr>
                <td>+44(0)745-5468-457</td>
                <td>fakeemail@playpal.com</td>
                <td>Faraway 45, Madagascar, Africa</td>
              </tr>
            </table>
          </Col>
        </Row>
      </section>
    )
  }
}

export default Contact;