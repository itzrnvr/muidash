import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Header from './components/header/Header';
import { useLocation } from 'react-router-dom'; 
import { CssBaseline } from '@mui/material';
import {useParams, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

function App() {
	const currentPath = useSelector((state) => state.path.path)
	const [title, setTitle] = useState(null);
	const location = useLocation();

	const headerData = {
		'/campaign': {
			title: "Add Campaign",
			handleClick: () => {
				console.log("clicked for campaign")
			}
		},
		'/dashboard': {
			title: "View More",
			handleClick: () => {
				console.log("clicked for dashboard")
			}
		},
		
	}
	
	useEffect(() => {
	  const parsedTitle = location.pathname.replace(/\W/g, ' ');
	  setTitle(parsedTitle);
	}, [location]);
  


	return(
		<Grid container>
			<CssBaseline/>
			<Navbar />	
			<Header title={title} actionButtonTitle={headerData[currentPath].title} />
			<Outlet />
		</Grid>
	)

}

export default App;
