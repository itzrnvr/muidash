import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MainDataList from '../../../components/common/SmartDataGrid/SmartDataGrid'
import { Grid, Box} from '@mui/material'
import SmartDataGrid from '../../../components/common/SmartDataGrid/SmartDataGrid'
import { pathActions } from '../../../state/features/pathSlice'
import AddCampaignForm from '../../../components/dialog/AddCampaignForm'
import { campaignActions } from '../../../state/features/campaignSlice'
import { headerActions } from '../../../state/features/headerSlice'
import getCurrentDate from '../../../utils/getCurrentDate'
import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

const CampaignManagement = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentPath = useSelector((state) => state.path.path)
 

  const state = useSelector(state => state.campaign)
  const isDialogOpen = state.dialog.addCampaign.isOpen

  const handleOnSelectionChanged = (value) => {
    dispatch(campaignActions.setSelectedData(value))
  }

  useEffect(() => { 
    dispatch(headerActions.updateTopText({
      'title': 'Campaign',
      'subtitle': ''
    }))

    if(currentPath != '/campaign/campaignManagement')
    dispatch(pathActions.updatePath('/campaign/campaignManagement'))
  }, [])


  const handleDialogOnClose = (type, data) => {
    if(type == 'Positive'){
      console.log('camp', 'lll  ')
      dispatch(campaignActions.addData({       
        ...data,
        date: getCurrentDate()
      }))
    } else {
    }
    dispatch(campaignActions.closeDialog())
  }

  const handleRowSelect = (data) => {
    console.log('From Lead Management', data)
    navigate(`/campaign/leadManagement/${data.id}/${data.name}`)  
  }

  return (    
    <Box sx={{minWidth: '100vw'}} >
      <SmartDataGrid 
      data={state.data}
      onSelectionChange={(value) => handleOnSelectionChanged(value)}
      onRowSelect={(data)=> handleRowSelect(data)}
      />
      <AddCampaignForm isOpen={isDialogOpen} onClose={(type, data)=> handleDialogOnClose(type, data)}/>
    </Box>
  )
}

export default CampaignManagement