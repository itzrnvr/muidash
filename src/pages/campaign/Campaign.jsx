import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MainDataList from '../../components/common/SmartDataGrid/SmartDataGrid'
import { Grid, Box} from '@mui/material'
import SmartDataGrid from '../../components/common/SmartDataGrid/SmartDataGrid'
import { pathActions } from '../../state/features/pathSlice'
import AddCampaignForm from '../../components/dialog/AddCampaignForm'
import { campaignActions } from '../../state/features/campaignSlice'
import { headerActions } from '../../state/features/headerSlice'
import getCurrentDate from '../../utils/getCurrentDate'
import { useMemo } from 'react'

const Campaign = () => {
  const dispatch = useDispatch()
  const currentPath = useSelector((state) => state.path.path)
  if(currentPath != '/campaign')
    dispatch(pathActions.updatePath('/campaign'))
  const isDialogOpen = useSelector(state => state.campaign.dialog.addCampaign.isOpen)
  const headerEvent = useSelector(state => state.header.event)

  const selected = useRef()

  const handleOnSelectionChanged = (value) => {
    selected.current = value
  }

  useEffect(() => { 
    dispatch(headerActions.addMenu([
      {
        type: 'Button',
        variant: 'contained',
        title: 'Add Campaign',
        event: 'openDialog'
      },
      {
        type: 'Button',
        variant: 'outlined',
        title: 'Delete Campaign',
        event: 'deleteCampaign'
      },

    ]))
  }, [])

  useEffect(()=>{
    switch(headerEvent){
      case 'openDialog': 
        console.log("Open Dialog called")
        dispatch(campaignActions.openDialog())
        break;
      case 'deleteCampaign': 
        dispatch(campaignActions.deleteData(selected.current))
        dispatch(headerActions.executeEvent('campaignItemDeleted'))
        console.log("heard")
        console.log(selected.current)
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
      <SmartDataGrid onSelectionChange={(value) => handleOnSelectionChanged(value)}/>
      <AddCampaignForm isOpen={isDialogOpen} onClose={(type, data)=> handleDialogOnClose(type, data)}/>
    </Box>
  )
}

export default Campaign