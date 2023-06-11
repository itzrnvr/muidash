import React from 'react'
import {Box} from '@mui/material'
import CommonButton from '../../../components/common/CommonButton/CommonButton'
import { headerStyles } from '../../../components/header/headerStyles'
import { useSelector, useDispatch} from 'react-redux'
import { campaignActions } from '../../../state/features/campaignSlice'

const CampaignHeaderMenu = () => {

  const dispatch = useDispatch()
  const state = useSelector(state => state.campaign)

  const handleAddCampaign = () => {
    dispatch(campaignActions.openDialog())
  }

  const handleDeleteCampaign = () => {
    dispatch(campaignActions.deleteData(state.selectedData))
  }

  return (
      <Box>
        <CommonButton
          sx={headerStyles.webButton}
          variant={'contained'}
          onClick={()=> handleAddCampaign()}
          >
          Add Campaign 
        </CommonButton>

        <CommonButton
          sx={headerStyles.webButton}
          variant={'outlined'}
          onClick={()=> handleDeleteCampaign()}
          >
          Delete Campaign
        </CommonButton>
      </Box>
    )
}

export default CampaignHeaderMenu