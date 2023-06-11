import React, { useEffect } from 'react'
import {Box} from '@mui/material'
import {Outlet, useActionData, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { headerActions } from '../../state/features/headerSlice'
const Campaign = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(()=>{
    navigate('/campaign/campaignManagement')
  },[])

  return (
    <Box sx={{
      marginLeft: '336px', 
      marginTop: 2, 
      marginBottom: 2, 
      marginRight: 2,
      width: '100%', 
      height: '100%'
    }}>
      <Outlet/>
    </Box>
  )
}

export default Campaign