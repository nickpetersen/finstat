import React from 'react';

import { Navbar, Nav } from "react-bootstrap";

const Footer: React.FC = () => (
	<footer>
		<Navbar fixed="bottom" className="justify-content-end">
			<Nav>
				<Nav.Item>
					<Nav.Link eventKey="faq">FAQ</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="privacy-policy">Privacy Policy</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link eventKey="email-us">Email Us</Nav.Link>
				</Nav.Item>
			</Nav>
		</Navbar>
	</footer>
);

export default Footer;
