import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MainDataList from '../../../../components/common/SmartDataGrid/SmartDataGrid'
import { Grid, Box} from '@mui/material'
import SmartDataGrid from '../../../../components/common/SmartDataGrid/SmartDataGrid'
import { pathActions } from '../../../../state/features/pathSlice'
import AddCampaignForm from '../../../../components/dialog/AddCampaignForm'
import { campaignActions } from '../../../../state/features/campaignSlice'
import { headerActions } from '../../../../state/features/headerSlice'
import getCurrentDate from '../../../../utils/getCurrentDate'
import { useParams } from 'react-router-dom'
import { leadsActions } from '../../../../state/features/leadSlice'
import AddLeadDialog from '../../../../components/dialog/AddLeadDialog'
import CallLeadsDialog from '../../../../components/dialog/CallLeadsDialog'

const LeadManagement = () => {
  const {id, name} = useParams()

  const dispatch = useDispatch()
  const currentPath = useSelector((state) => state.path.path)
  const state = useSelector(state => state.leads)
  const isDialogOpen = state.dialog.addLead.isOpen
  const isCallLeadsDialogOpen = state.dialog.callLead.isOpen
  const headerEvent = useSelector(state => state.header.event)

  const handleOnSelectionChanged = (value) => {
    dispatch(leadsActions.setSelectedData(value))
  }

  useEffect(() => { 
    dispatch(headerActions.updateTopText({
        'title': 'Leads',
        'subtitle': name
      }))
    if(currentPath != '/campaign/leadManagement')
      dispatch(pathActions.updatePath('/campaign/leadManagement'))
  }, [])

  const handleDialogOnClose = (type, data) => {

    if(type == 'Positive'){
      console.log('camp', 'lll  ')
      dispatch(leadsActions.addData({       
        ...data
      }))
    } 
    dispatch(leadsActions.closeDialog())
  }

  const handleCallLeadsDialogClose = () => {
    dispatch(leadsActions.closeCallLeadsDialog())
  }

  return (    
    <Box >
      <SmartDataGrid 
      data={state.data} 
      onRowSelect={(data)=> console.log(data)}
      onSelectionChange={(value) => handleOnSelectionChanged(value)}/>
      <AddLeadDialog data={state.data[0]} isOpen={isDialogOpen} onClose={(type, data)=> handleDialogOnClose(type, data)}/>
      <CallLeadsDialog data={state.selectedData} isOpen={isCallLeadsDialogOpen} onClose={()=> handleCallLeadsDialogClose()}/>
    </Box>
  )
}

export default LeadManagement