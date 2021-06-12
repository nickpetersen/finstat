import React from 'react';
import { Container, Row, Col, Jumbotron, Button } from "react-bootstrap";
import Chart from "./chart";

const ComingSoon: React.FC = () => (
	<>
		<Jumbotron>
			<h1>Coming soon!</h1>
			<p>
				Finstat is a financial data aggregator app. Upon release you will be able to view quarterly financial data from all federal credit unions and banks.
				</p>
		</Jumbotron>
		<Container>
			<Row>
				<Col>
					<h2>Graph in action</h2>
					<p>Average loan amount per customer by month</p>
				</Col>
				<Chart />
			</Row>
		</Container>
	</>
);

export default ComingSoon;
