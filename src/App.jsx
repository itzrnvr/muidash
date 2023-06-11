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
	
	return(
		<Grid container>
			<CssBaseline/>
			<Navbar />	
			<Header/>
			<Outlet />
		</Grid>
	)

}

export default App;
