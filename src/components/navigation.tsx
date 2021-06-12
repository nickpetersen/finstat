import React from 'react';

import { Navbar, Nav } from "react-bootstrap";

const Navigation: React.FC = () => (
	<Navbar bg="light" >
		<Navbar.Brand href="#home">
			<h2>Finstat</h2>
		</Navbar.Brand>
		<Nav className="justify-content-end" defaultActiveKey="/home" as="ul">
			<Nav.Item as="li">
				<Nav.Link href="/home">Home</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link eventKey="link-1">About</Nav.Link>
			</Nav.Item>
			<Nav.Item as="li">
				<Nav.Link eventKey="link-2" disabled>Login</Nav.Link>
			</Nav.Item>
		</Nav>
	</Navbar>
);

export default Navigation;
