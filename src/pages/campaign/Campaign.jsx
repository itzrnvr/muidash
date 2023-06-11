import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MainDataList from '../../components/common/SmartDataGrid/SmartDataGrid'
import { Grid, Box} from '@mui/material'
import SmartDataGrid from '../../components/common/SmartDataGrid/SmartDataGrid'
import { pathActions } from '../../state/features/pathSlice'
import AddCampaignForm from '../../components/dialog/AddCampaignForm'
import { campaignActions } from '../../state/features/campaignSlice'
import { headerActions } from '../../state/features/headerSlice'
import getCurrentDate from '../../utils/getCurrentDate'

const Campaign = () => {
  const dispatch = useDispatch()
  const currentPath = useSelector((state) => state.path.path)
  if(currentPath != '/campaign')
    dispatch(pathActions.updatePath('/campaign'))
  const isDialogOpen = useSelector(state => state.campaign.dialog.addCampaign.isOpen)
  const headerEvent = useSelector(state => state.header.event)



useEffect(() => { 
  dispatch(headerActions.addMenu([
    {
      type: 'Button',
      variant: 'outlined',
      title: 'Add Campaign',
      event: 'openDialog'
    }
  ]))
}
, [])

  useEffect(()=>{
    switch(headerEvent){
      case 'openDialog': 
        console.log("Open Dialog called")
        dispatch(campaignActions.openDialog())
        break;
      default:
    }
  },[headerEvent])

  const handleDialogOnClose = (type, data) => {
    if(type == 'Positive'){
      console.log('camp', 'lll  ')
      dispatch(campaignActions.addData({       
        ...data,
        date: getCurrentDate()
      }))
      dispatch(headerActions.executeEvent('closeDialogPositive'))
    } else {
      dispatch(headerActions.executeEvent('closeDialogNegative'))
    }
    dispatch(campaignActions.closeDialog())
  }

  return (    
    <Box sx={{marginLeft: '336px', marginTop: 2, marginBottom: 2,
      width: '100vw'
    }}>
      <SmartDataGrid />
      <AddCampaignForm isOpen={isDialogOpen} onClose={(type, data)=> handleDialogOnClose(type, data)}/>
    </Box>
  )
}

export default Campaign