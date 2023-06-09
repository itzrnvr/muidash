import React from 'react'
import {Grid} from '@mui/material'
import CommonButton from '../../components/commonButton/CommonButton'

const Authentication = () => {
	const buttonStyles = {
		fontSize: '0.875rem',
		fontWeigt: 600,
		textTransform: 'capitalize',
		borderRadius: 2.5,
		'&:MuiButton-contained': {
			backgroundColor: '#0009be5',
			'&:hover': {
				backgroundColor: '0006db3'
			},
		},
		'&:MuiButton-outlined': {
			color: '#fff',
			borderColor: '#fff',
			'&:hover': {
				backgroundColor: 'transparent'
			}
		}
	}

	return (
		<Grid item xs={8}>
			This is Authentication Page.
			<CommonButton 
				size = "large"
				variant = "contained"
				sx={buttonStyles}
			>
				Add User
			</CommonButton>


			<CommonButton 
				variant = "outlined"
				sx={buttonStyles}
			>
				Web Setup
			</CommonButton>
		</Grid>
	)
}

export default Authentication