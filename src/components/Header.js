import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = props => {

    const { branding } = props;

    return (
        <Navbar bg="danger" variant="Light" className="mb-3" >
            <Link to="/" className="navbar-brand"style={{color: '#ffffff'}}>{branding}</Link>
            <Nav className="mr-auto"></Nav>
            <Nav>

                <Link to="/" className="nav-link" style={{color: '#ffffff'}}>Home</Link>
                <Link to="/about" className="nav-link" style={{color: '#ffffff'}}>About</Link>
                <Link to="/event/add" className="nav-link"style={{color: '#ffffff'}}>Add Event</Link>
                
            </Nav>
        </Navbar>
    )
}

Header.defaultProps = {
    branding: 'My React App'
}

Header.propTypes = {
    branding: PropTypes.string.isRequired
}

export default Header;
