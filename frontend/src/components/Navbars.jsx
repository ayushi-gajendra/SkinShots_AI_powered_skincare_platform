import { Navbar, Container, Nav } from "react-bootstrap";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useCart} from "../context/CartContext"


function AppNavbar(){

	const navigate = useNavigate();
	const {cart} = useCart();

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
						src="/images/SkinShots-Logo.png"
						className="d-inline-block align-top img-fluid"
					/>{' '}
					<img
						alt="Brand Name"
						src="/images/SkinShots-Name.png"
						className="d-inline-block align-top img-fluid"
					/>
				</Navbar.Brand>

				<Nav className="icon-nav">
					<Nav.Link onClick = { () => navigate("/user-profile")}>
					<img
						alt="User"
						src="/images/User.png"
						className="user-icon"
					/>{' '}
					</Nav.Link>
					<Nav.Link onClick = {() => navigate("/checkout")} className="cart-icon">
					<img
						alt="Cart"
						src="/images/Cart.png"
					/>
					{cart.length > 0 && (
						<div className="cart-count">{cart.reduce((total, item) => total+item.quantity, 0)}</div>
					)}
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
						<Nav.Link onClick = {()=> navigate("/shop")}>Shop</Nav.Link>
						<Nav.Link onClick = {() => navigate("/product-finder")}>Product Finder</Nav.Link>
						<Nav.Link onClick={() => navigate("/ai-analysis")}>AI Skin Analysis</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
        </>
    )
}

export default AppNavbar;