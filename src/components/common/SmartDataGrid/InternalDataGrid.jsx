import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { InputSwitch } from 'primereact/inputswitch';
import { Column } from 'primereact/column';
import { Skeleton } from 'primereact/skeleton';
import {Box} from '@mui/material'
import { sort } from 'fast-sort';

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css";       
import { Co2Sharp, SettingsRounded, SortRounded } from '@mui/icons-material';
//TODO added update feature

export default function InternalDataGrid({
    data,
    onSelectionChange, 
    onRowSelect
}) {
    const defaultFilters = () => {
        let holder = {}
        data.length > 0 ? Object.keys(data[0]).map((key, index) => {
            holder[key] = { value: '', matchMode: 'contains' }
        }) : ''
        console.log('Default filters', holder)
        return holder
    }
    const [allData, setAllData] = useState([])
    const [sortOrder, setSortOrder] = useState(null)
    const [sortField, setSortField] = useState(null)
    const requestRef = useRef(0)
    // console.log("From INTernal grid", data)
    const [loading, setLoading] = useState(false);
    const [totalRecords, setTotalRecords] = useState(0);
    const [currentData, setCurrentData] = useState(null);
    const [metaKey, setMetaKey] = useState(true);
    const [selected, setSelected] = useState()
    const [lazyState, setlazyState] = useState({
        first: 0,
        rows: 10,
        page: 1,
        sortField: null,
        sortOrder: null,
        filters: defaultFilters()
    });

    let networkTimeout = null;

    useEffect(() => {
        setAllData(data)
    }, [data])


    useEffect(() => {
        loadLazyData();
    }, [lazyState, allData]);


    const sortItems = () => {
        sortOrder > 0 ? setAllData(sort(allData).desc(item => item[sortField])): 
        setAllData(sort(allData).asc(item => item[sortField]))
    }

    useEffect(()=> {
        if(sortOrder && sortField){
            sortItems()
        }

    
    }, [sortOrder, sortField])

    const dataSource = async ({lazyEvent}) => {
        const {first, rows, page, sortField, sortOrder, filters} = lazyEvent
        console.log('dataSource ', lazyEvent)

        setSortField(sortField)
        setSortOrder(sortOrder)


        const getPartialData = () => {
            let end = (first + 50) 
            let start = end - 50
            start = start < 0 ? 0 : start

            console.log("dataSource", `start ${start} end ${end}`)
            return allData.slice(start, end)
        }
        return {
            totalRecords: allData.length,
            currentData: getPartialData()
        }
    }
    
    const loadLazyData = () => {
        setLoading(true);

        if (networkTimeout) {
            clearTimeout(networkTimeout);
        }

        //imitate delay of a backend call
        networkTimeout = setTimeout(() => {
            dataSource({ lazyEvent: lazyState}).then((item) => {
                setTotalRecords(item.totalRecords);
                setCurrentData(item.currentData);
                setLoading(false);
                console.log('currentDataLazy', item.currentData)
            });
        }, 100);
    };

 

    
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
        // const {ctrlKey, shiftKey, altKey, metaKey} = event.originalEvent
        // if(ctrlKey || shiftKey || altKey) {
        //     console.log(ctrlKey)
        //     console.log(shiftKey)
        //     console.log(altKey)
        // } else {
        //     onRowSelect(event.data)
        // }

        // console.log("Row select event", event)

        onRowSelect(event.data)

    }
    
    const handleSelectionChange = (items) => {
        setSelected(items)
        onSelectionChange(items)
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
           
            value={currentData} 

            lazy filterDisplay="row" dataKey="id" paginator
                    first={lazyState.first} rows={50} totalRecords={totalRecords} onPage={onPage}
                    onSort={onSort} sortField={lazyState.sortField} sortOrder={lazyState.sortOrder}
                    onFilter={onFilter} filters={lazyState.filters} loading={loading} 

            columnResizeMode="expand" resizableColumns
            tableStyle={{minWidth: '50rem' }}
            metaKeySelection={metaKey}
            onRowSelect={(event) => handleRowSelect(event)}     
            selectionMode="multiple" selection={selected} onSelectionChange={(e) => handleSelectionChange(e.value)}
            dragSelection 
    >
                {allData.length > 0 ? Object.entries(data[0]).map(([key, value]) => (
                    <Column field={key} sortable  header={key}></Column>
                )) : <></>}
        </DataTable>
    );
}
