import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { InputSwitch } from 'primereact/inputswitch';
import { Column } from 'primereact/column';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css";       

import { useSelector, useDispatch } from 'react-redux';
import { campaignActions } from '../../../state/features/campaignSlice';
                               


export default function InternalDataGrid({onSelectionChange}) {
    const state = useSelector(state => state.campaign.data)
    const dispatch = useDispatch()

    const [selected, setSelected] = useState()
    const [metaKey, setMetaKey] = useState()


    
    const updateItem = (item) => {
        dispatch(campaignActions.updateData(item))
    }

    const handleSelectionChange = (value) => {
        setSelected(value)
        onSelectionChange(value)
    }
    return (
        <div className="card">
            <DataTable value={state} 
            stripedRows paginator rows={5}     
            selectionMode="multiple" selection={selected} onSelectionChange={(e) => handleSelectionChange(e.value)}
            dataKey="id" dragSelection 
            tableStyle={{ width: '100%'}}>
                <Column field="name" sortable header="Name"></Column>
                <Column field="category" sortable  header="Category"></Column>
                <Column field="date" sortable header="Date Created"></Column>
            </DataTable>
        </div>
    );
}
        