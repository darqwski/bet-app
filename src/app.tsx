import React from 'react';
import { BrowserRouter as Router, Route, useLocation } from 'react-router-dom';
import routing from './config/routing';
import { ROUTER_APP_PREFIX } from './config/app-config';
import './css/index.less';
import AppManager from '@/context/app-manager';
import ModalManager from '@/context/modal-manager';
import SnackBarManager from '@/context/snackbar-manager';
import RacesManager from '@/context/races-manager/RacesManager';

/**
 * React Architecture
 * This main AppComponent is created main for adding global contexts f.e. Modal, Snackbar or Cookies management
 */

interface IApp {
    appData: unknown;
}

const App: React.FC<IApp> = ({ appData }) => {

	return (
		<AppManager appData={appData}>
			<ModalManager>
				<SnackBarManager>
					<RacesManager>
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
				</SnackBarManager>
			</ModalManager>
		</AppManager>
	);
};

export default App;
