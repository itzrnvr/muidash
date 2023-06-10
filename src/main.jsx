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
import MachineLearning from './pages/machinelearning/MachineLearning';
import Hosting from './pages/hosting/Hosting';
import Functions from './pages/functions/Functions';
import Campaign from './pages/campaign/Campaign';
import Storage from './pages/storage/Storage';

import {ThemeProvider} from '@mui/material/styles'
import dashBoardTheme from './dashboardTheme/dashboardTheme';
import { Provider } from 'react-redux';
import store from './state/store/store'

ReactDOM.render(
	<Provider store = {store}>
		<ThemeProvider theme={dashBoardTheme}>
			<BrowserRouter>
				<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Campaign />} />
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="campaign" element={<Campaign />} />
				</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	</Provider>,
  document.getElementById('root')
);