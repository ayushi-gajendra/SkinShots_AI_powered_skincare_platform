import { Navbar, Container, Nav } from "react-bootstrap";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


function AppNavbar(){

	const navigate = useNavigate();

    return(
        <>
		{/*--------------------------------------First Navbar--------------------------------------------------*/}
        <Navbar className="first-navbar" sticky="top" expand="md">
			<Container fluid>
			</Container>
		</Navbar>

		{/*--------------------------------------Second Navbar--------------------------------------------------*/}
		<Navbar bg="white" data-bs-theme="light" className="second-navbar" sticky="top" expand="md">
			<Container>
				<Navbar.Brand onClick = { () => navigate("/") }>
					<img
						alt="Brand Logo"
						src="images/SkinShots-Logo.png"
						className="d-inline-block align-top img-fluid"
					/>{' '}
					<img
						alt="Brand Name"
						src="images/SkinShots-Name.png"
						className="d-inline-block align-top img-fluid"
					/>
				</Navbar.Brand>

				<Nav className="icon-nav">
					<Nav.Link onClick = { () => navigate("/user-profile")}>
					<img
						alt="User"
						src="images/User.png"
						className="d-inline-block align-top img-fluid"
					/>{' '}
					</Nav.Link>
					<Nav.Link onClick = { () => navigate("/checkout")}>
					<img
						alt="Cart"
						src="images/Cart.png"
						className="d-inline-block align-top img-fluid"
					/>
					</Nav.Link>
				</Nav>
			</Container>
		</Navbar>

		{/*--------------------------------------Third Navbar--------------------------------------------------*/}	
		<Navbar expand="md" className="third-navbar">
			<Container fluid>
			{/* Hamburger button on small screens */}
			<Navbar.Toggle aria-controls="text-navbar-nav"/>
			{/* Collapsible section */}
			<Navbar.Collapse>
				<Nav className="third-navbar-links">
					<Nav.Link href="#shop">Shop</Nav.Link>
					<Nav.Link href="#product-finder">Product Finder</Nav.Link>
					<Nav.Link href="#ai-analysis">AI Skin Analysis</Nav.Link>
					<Nav.Link href="#why-us">Why Us</Nav.Link>
					<Nav.Link href="#blog">Blog</Nav.Link>
				</Nav>
			</Navbar.Collapse>
			</Container>
		</Navbar>
        </>
    )
}

export default AppNavbar;