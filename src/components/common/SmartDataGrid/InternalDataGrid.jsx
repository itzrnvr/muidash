import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { InputSwitch } from 'primereact/inputswitch';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import {Box} from '@mui/material'

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css";       
import { Co2Sharp } from '@mui/icons-material';
//TODO added update feature

export default function InternalDataGrid({
    data,
    onSelectionChange, 
    onRowSelect
}) {
    console.log("From INTernal grid", data)
    const [virtualItems, setVirtualItems] = useState();
    const [lazyLoading, setLazyLoading] = useState(false);

    let loadLazyTimeout = 50;
    const [metaKey, setMetaKey] = useState(true);
    const [selected, setSelected] = useState()


    const loadCarsLazy = (event) => {
        !lazyLoading && setLazyLoading(true);

        if (loadLazyTimeout) {
            clearTimeout(loadLazyTimeout);
        }

        //simulate remote connection with a timeout
        loadLazyTimeout = setTimeout(() => {
            let _virtualItems = [...virtualItems];
            let { first, last } = event;

            //load data of required page
            console.log('slice', first)
            console.log('slice', last)
            console.log(virtualItems.length)
            console.log('data', data)
            const loadedItems = data.slice(first, last);
            console.log('from loaded items', loadedItems)

            //populate page of virtual cars
            Array.prototype.splice.apply(_virtualItems, [...[first, last - first], ...loadedItems]);
            console.log('_virtualItems', _virtualItems)
            console.log('virtualItems', virtualItems)
            setVirtualItems(_virtualItems);
            console.log("RIGHT BEFORE", virtualItems)
            setLazyLoading(false);
        }, 50);
    };

    useEffect(()=>{
        console.log('efffectivedata', data)
        setVirtualItems(Array.from({ length: data.length }))
    },[data])

    const defaultFilters = () => {
        let holder = {}
        data.length > 0 ? Object.keys(data[0]).map((key, index) => {
            holder[key] = { value: '', matchMode: 'contains' }
        }) : ''
        console.log('Default filters', holder)
        return holder
    }

    
    const onPage = (event) => {
        setlazyState(event);
    };

    const onSort = (event) => {
        setlazyState(event);
    };

    const onFilter = (event) => {
        event['first'] = 0;
        setlazyState(event);
    };

    const handleRowSelect = (event) => {
        const {ctrlKey, shiftKey, altKey, metaKey} = event.originalEvent
        if(ctrlKey || shiftKey || altKey) {
            console.log(ctrlKey)
            console.log(shiftKey)
            console.log(altKey)
        } else {
            onRowSelect(event.data)
        }

        console.log("Row select event", event)

    }
    
    const handleSelectionChange = (data) => {
        setSelected(data)
        onSelectionChange(data)
    }

    // const loadingTemplate = (options) => {
    //     return (
    //         <div className="flex align-items-center" style={{ height: '17px', flexGrow: '1', overflow: 'hidden' }}>
    //             <Skeleton width={options.cellEven ? (options.field === 'year' ? '30%' : '40%') : '60%'} height="1rem" />
    //         </div>
    //     );
    // };

    return (
        <DataTable 
            dataKey={'id'}
            value={virtualItems} scrollable scrollHeight="100vh"
            virtualScrollerOptions={{ lazy: true, onLazyLoad: loadCarsLazy, itemSize: 100, delay: 0, showLoader: false, loading: lazyLoading }}
            // lazy filterDisplay="row" paginator
            //         first={lazyState.first} rows={100} totalRecords={totalRecords} onPage={onPage}
                  
            //         onFilter={onFilter} filters={lazyState.filters} loading={loading}
            columnResizeMode="expand" resizableColumns
            tableStyle={{minWidth: '50rem' }}
            // scrollable scrollHeight="100vh  " virtualScrollerOptions={{ itemSize: 46 }}
          
            metaKeySelection={metaKey}
            onRowSelect={(event) => handleRowSelect(event)}     
            selectionMode="multiple" selection={selected} onSelectionChange={(e) => handleSelectionChange(e.value)}
            dragSelection 
    >
                {data.length > 0 ? Object.entries(data[0]).map(([key, value]) => (
                    <Column field={key} sortable  header={key}></Column>
                )) : <></>}
        </DataTable>
    );
}
