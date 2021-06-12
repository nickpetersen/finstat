import React from 'react';

import Navigation from "./components/navigation";
import ComingSoon from "./components/coming-soon";
import Footer from "./components/footer";
import Chart from "./components/chart"

const App: React.FC = () => (
	<>
		<Navigation />
		<ComingSoon />
		<Footer />
	</>
);

export default App;
