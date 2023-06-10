import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import MainDataList from '../../components/common/SmartDataGrid/SmartDataGrid'
import { Grid, Box} from '@mui/material'
import SmartDataGrid from '../../components/common/SmartDataGrid/SmartDataGrid'
import { pathActions } from '../../state/features/pathSlice'

const Campaign = () => {
  const currentPath = useSelector((state) => state.path.path)
  const dispatch = useDispatch()
  if(currentPath != '/campaign')
    dispatch(pathActions.updatePath('/campaign'))

  return (
    <Box sx={{marginLeft: '336px', marginTop: 2, marginBottom: 2}}>
      <SmartDataGrid/>
    </Box>
  )
}

export default Campaign