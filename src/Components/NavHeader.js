import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';

export class NavHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    this.toggle = this.toggle.bind(this)
    }


    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand to="/">JnJ Equine Massage</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Link to="/">
                            <Button color='primary'>Home</Button>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/services">
                            <Button color='secondary'>Services</Button>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/about">
                            <Button color='secondary'>About Us</Button>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/contact">
                            <Button color='secondary'>Contact Us</Button>
                        </Link>
                    </NavItem>
                    
                    </Nav>
                </Collapse>
            </Navbar>

            </div>
        )
    }
}

export default NavHeader
