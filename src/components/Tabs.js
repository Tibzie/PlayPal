import React, { Component } from 'react';
import {
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Button
} from 'reactstrap';

class Tabs extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col lg="6" md="6" sm="6" xs="6">
                        <Card>
                            <CardImg top src="./images/children.jpg" />
                            <CardBody>
                                <CardTitle>Happy Hour!</CardTitle>
                                <CardText>This is how children are having fun! Great happy times! Yay! Be a part of it!</CardText>
                                <Button>About us</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg="6" md="6" sm="6" xs="6">
                        <Card>
                            <CardImg top src="./images/video-controller.jpg" />
                            <CardBody>
                                <CardTitle>Playtime!</CardTitle>
                                <CardText>Grab a controller and fight for your free serial number! Terms and conditions apply.</CardText>
                                <Button>Go!</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Tabs;
