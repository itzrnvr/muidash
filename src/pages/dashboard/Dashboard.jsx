import React, {useEffect} from 'react'
import {Grid, Typography, Box} from '@mui/material'
import CommonButton from '../../components/common/CommonButton/CommonButton'
import NotificationBell from '../../components/common/NotificationBell/NotificationBell'
import { useSelector, useDispatch } from 'react-redux'
import { pathActions } from '../../state/features/pathSlice'
import { headerActions } from '../../state/features/headerSlice'

const Authentication = () => {
	const currentPath = useSelector((state) => state.path.path)
	const dispatch = useDispatch()
	if(currentPath != '/dashboard')
	  dispatch(pathActions.updatePath('/dashboard'))

	useEffect(()=>{
		dispatch(headerActions.addMenu([
				{
					type: 'Button',
					variant: 'outlined',
					title: 'View More',
					event: 'ViewMore'
				}
			])	
		)
	}, [])
  

	return (
		<Box sx={{marginLeft: '336px'}}>
			<Typography variant='h1'>To be IMPLEMENTED</Typography>
			<Typography variant='h3'>All the analytics and stats will be present here</Typography>

		</Box>
	)
}

export default Authentication