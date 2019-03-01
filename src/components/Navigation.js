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
        
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light>
                    <NavbarBrand tag={Link} exact to="/" className="mr-auto">Play Pal</NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />

                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/About">About</NavLink>
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
