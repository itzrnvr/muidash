import React, { useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { mainNavbarItems } from './consts/navbaritems';
import { navbarStyles } from './navbarStyles';
import {useParams, useNavigate} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Typography, AppBar, Button, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { pathActions } from '../../state/features/pathSlice';

const drawerWidth = 240;

const Navbar = () => {
	const currentPath = useSelector((state) => {
		console.log(state.path)
		return state.path.path
	})
	const dispatch = useDispatch()

	const navigate = useNavigate()

	const handleOnClick = (item) => {
		navigate(item.route)
		dispatch(pathActions.updatePath(item.route))
	}
	
	return (
		<Drawer
			sx={navbarStyles.drawer}
			variant="permanent"
			anchor="left"
		>
			<Box >
				<AppBar position="static">
					<Toolbar sx={navbarStyles.toolbar}>
						<Typography variant="h1" component="div" align='center' sx={navbarStyles.toolbarTitle}>
							Smart Dialer
						</Typography>
					</Toolbar>
				</AppBar>
			</Box>
			<Divider color='#fff' sx={{margin: 1}}/>
				<List>
					{mainNavbarItems.map((item, index) => (
						<ListItemButton 
						selected={item.route == currentPath}
						key={item.id}
						onClick = {()=> handleOnClick(item)}
						>
							<ListItemIcon 
								sx={navbarStyles.icons}>
								{item.icon}
							</ListItemIcon>
							<ListItemText 
								sx={navbarStyles.text}
								primary={item.label} 
							/>
						</ListItemButton>
					))}
				</List>
			<Divider />
		</Drawer>
	)
}

export default Navbar