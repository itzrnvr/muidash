import React from 'react'
import {Grid} from '@mui/material'
import CommonButton from '../../components/common/CommonButton/CommonButton'
import NotificationBell from '../../components/common/NotificationBell/NotificationBell'
import { useSelector, useDispatch } from 'react-redux'
import { pathActions } from '../../state/features/pathSlice'

const Authentication = () => {
	const currentPath = useSelector((state) => state.path.path)
	const dispatch = useDispatch()
	if(currentPath != '/dashboard')
	  dispatch(pathActions.updatePath('/dashboard'))
  

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
		<div>He</div>
	)
}

export default Authentication