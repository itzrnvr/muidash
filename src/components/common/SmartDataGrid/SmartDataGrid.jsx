import React from 'react'   
import InternalDataGrid from './InternalDataGrid'

const SmartDataGrid = ({
  data,
  onRowSelect,
  onSelectionChange
}) => {
  return (
    <InternalDataGrid 
      data={data}
      onSelectionChange={(value)=> onSelectionChange(value)}
      onRowSelect={(data) => onRowSelect(data)}
    />
  )
}

export default SmartDataGrid