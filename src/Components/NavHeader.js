import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { library } from "@fortawesome/fontawesome-svg-core/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome/";
import { faFacebook, faInstagram, faArtstation } from "@fortawesome/free-brands-svg-icons/";
library.add(faFacebook, faInstagram, faArtstation);

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
            {this.state.isOpen ? (
                <Navbar color="light" light expand="md" className='' id='expanded'>
                <NavbarBrand to="/">JnJ Equine Massage</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem className='nav-link'>
                        <Link to="/" >
                            <Button color='primary'
                            onClick={this.toggle}
                            >Home</Button>
                        </Link>
                    </NavItem>
                    <NavItem className='nav-link'>
                        <Link to="/services">
                            <Button color='primary'
                            onClick={this.toggle}
                            >Services</Button>
                        </Link>
                    </NavItem>
                    <NavItem  className='nav-link'>
                        <Link to="/about">
                            <Button color='primary'
                            onClick={this.toggle}
                            >About Us</Button>
                        </Link>
                    </NavItem>
                    <NavItem  className='nav-link'>
                        <Link to="/contact">
                            <Button color='primary'
                            onClick={this.toggle}
                            >Contact Us</Button>
                        </Link>
                    </NavItem>
                    
                    </Nav>
                </Collapse>
            </Navbar> 
            ) :
            <Navbar color="light" light expand="md" className='navbar'>
                <NavbarBrand to="/">JnJ Equine Massage</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem className='nav-link'>
                        <Link to="/" >
                            <Button color='primary'>Home</Button>
                        </Link>
                    </NavItem>
                    <NavItem className='nav-link'>
                        <Link to="/services">
                            <Button color='primary'>Services</Button>
                        </Link>
                    </NavItem>
                    <NavItem  className='nav-link'>
                        <Link to="/about">
                            <Button color='primary'>About Us</Button>
                        </Link>
                    </NavItem>
                    <NavItem  className='nav-link mr-3'>
                        <Link to="/contact">
                            <Button color='primary'>Contact Us</Button>
                        </Link>
                    </NavItem>
                    <ReactTooltip />
                    <a
                    data-tip="Register, login, schedule an appointment"
                    className='mr-3'
                    href="https://jnjequinemassage.com/#/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                    size="3x"
                    color="#000"
                    icon={["fab", "artstation"]}
                    />
                </a>
                    </Nav>
                </Collapse>
            </Navbar>
            }
            </div>
        )
    }
}

export default NavHeader
