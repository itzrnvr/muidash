import React from 'react'   
import InternalDataGrid from './InternalDataGrid'

const SmartDataGrid = ({
  onSelectionChange
}) => {
  return (
    <InternalDataGrid onSelectionChange={(value)=> onSelectionChange(value)}/>
  )
}

export default SmartDataGrid