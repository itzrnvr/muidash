import { useState } from 'react'
import './App.css'
import { Outlet } from "react-router-dom";
import Grid from '@mui/material/Grid';

import Navbar from './components/navbar/Navbar'

function App() {
	const [count, setCount] = useState(0)

	return <>
		<Grid container>
			<Navbar />	
			<Outlet />
		</Grid>
	</>
}

export default App;
