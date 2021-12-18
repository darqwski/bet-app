import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routing from './config/routing';
import './css/index.less';
import RacesManager from '@/context/races-manager/RacesManager';
import Header from '@/application/common/Header';

const App: React.FC = () => {

	return (
		<RacesManager>
			<Header />
			<Router>
				{routing.map(({ path, component }, index) => (
					<Route
						exact
						path={path}
						component={component}
						key={`routing-${index}`}
					/>
				))}
			</Router>
		</RacesManager>
	);
};

export default App;
