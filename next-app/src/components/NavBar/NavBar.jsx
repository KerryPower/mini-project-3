'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavLink from 'react-bootstrap/NavLink';
import './navbar.css';
import { useState } from 'react';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/order', label: 'Your Order' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' }
];

const dropdownItems = [
  { href: '/api/auth/signin', label: 'Login' },
  { href: '/admin/orders', label: 'Orders' },
  { href: '/admin/info', label: 'Employee Info' }
  ];

const NavBar = () => {
 
  return (
    <Navbar expand="lg" className="navbar-custom" sticky='top'>
      <Container>
        <NavbarBrand>
          <img src="http://localhost:3000/images/logo.png" alt="Simply Sliced" height={30} /></NavbarBrand>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((link, index) => (
              <NavLink key={index} href={link.href}>{link.label}</NavLink>
            ))}
            <NavDropdown title="Admin" id="basic-nav-dropdown">
              {dropdownItems.map((item, index) => (
                <NavDropdown.Item key={index} href={item.href}>{item.label}</NavDropdown.Item>
              ))}
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
        <NavbarBrand><img src="images/logo.png" alt="Simply Sliced" height={30} style={{visibility: "hidden"}}/></NavbarBrand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
