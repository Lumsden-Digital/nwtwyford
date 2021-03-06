import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Link from 'next/link'
import HeaderStyles from '../styles/Header.module.css'

const Header = () => {

    const navbar = {
        // height: '100px'
    }

    const brand = {
        backgroundColor: '#3e3e3e',
        color: 'white',
        fontSize: '1.5rem',
        height: '80%',
        width: '15rem',
        textAlign: 'center',
        borderRadius: '3px',
        marginBottom: '.8rem',
        marginTop: '.8rem',
        // paddingTop: '1rem'
    }

    const navlink = {
        marginLeft: '1.8rem'
    }

    return (
        <>
            <Navbar bg="light" expand="lg" collapseOnSelect className="py-4 nav-bar">
                <Link href='/' passHref><Navbar.Brand style={brand}>N.W.Twyford</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link href='/' passHref><Nav.Link style={navlink}>Home</Nav.Link></Link>
                        <Link href='/blog' passHref><Nav.Link style={navlink}>Blog</Nav.Link></Link>
                        <Link href='/contact' passHref><Nav.Link style={navlink}>Contact</Nav.Link></Link>
                        <Link href='/norms-attempt' passHref><Nav.Link style={navlink}>Norm's Attempt</Nav.Link></Link>
                        <Link href='/shop' passHref><Nav.Link style={navlink}>Shop</Nav.Link></Link>                        
                    </Nav>                    
                </Navbar.Collapse>
            </Navbar>
        </>

    )
}

export default Header
