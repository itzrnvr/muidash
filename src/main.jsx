import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Campaign from './pages/campaign/Campaign';
import CampaignManagement from './pages/campaign/pages/CampaignManagement';

import {ThemeProvider} from '@mui/material/styles'
import dashBoardTheme from './dashboardTheme/dashboardTheme';
import { Provider } from 'react-redux';
import store from './state/store/store'
import LeadManagement from './pages/campaign/pages/LeadManagement/LeadManagement';

ReactDOM.render(
	<Provider store = {store}>
		<ThemeProvider theme={dashBoardTheme}>
			<BrowserRouter>
				<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Campaign />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="campaign" element={<Campaign />}>
						<Route path="campaignManagement" element={<CampaignManagement/>}/>
						<Route path="leadManagement/:id/:name" element={<LeadManagement/>}/>
					</Route>
				</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</Provider>,
  document.getElementById('root')
);