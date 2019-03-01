import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';


class Navigation extends Component {
    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md"> 
                    <NavbarBrand tag={Link} to="/">Play Pal</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />

                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/About">About</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/Generator">Generator</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} to="/Contact">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>

                </Navbar>
            </div>
        )
    }
}

export default Navigation;
