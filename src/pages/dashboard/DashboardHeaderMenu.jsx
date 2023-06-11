import React from 'react'
import {Box} from '@mui/material'
import CommonButton from '../../components/common/CommonButton/CommonButton'
import { headerStyles } from '../../components/header/headerStyles'

const DashboardHeaderMenu = () => {
  return (
    <Box>
      <CommonButton
        sx={headerStyles.webButton}
        variant={'outlined'}
        onClick={()=> console.log('click')}
        >
        View More
      </CommonButton>
    </Box>

  )
}

export default DashboardHeaderMenu