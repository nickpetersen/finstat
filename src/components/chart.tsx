import React from 'react';
import { Bar } from 'react-chartjs-2';

const Chart: React.FC = () => {
	const state = {
		labels: ['January', 'February', 'March',
			'April', 'May'],
		datasets: [
			{
				label: 'Loans',
				backgroundColor: 'rgba(75,192,192,1)',
				borderColor: 'rgba(0,0,0,1)',
				borderWidth: 2,
				data: [6500, 5900, 8000, 8100, 5600]
			}
		]
	}
	const options = {
		title: {
			display: true,
			text: 'Average loan per customer',
			fontSize: 20
		},
		legend: {
			display: true,
			position: 'right',
		}
	}

	return (
		<Bar
			type="bar"
			data={state}
			options={options}
		/>
	)
};

export default Chart;