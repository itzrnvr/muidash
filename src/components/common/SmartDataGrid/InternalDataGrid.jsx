import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
//core
import "primereact/resources/primereact.min.css";                                       
                               


export default function InternalDataGrid() {
    const [products, setProducts] = useState([
        {
            code: 'skgslf',
            name: 'First Prod',
            category: 'cosmetics',
            quantity: '3'
        },
        {
            code: 'skgslf',
            name: 'Second Prod',
            category: 'cosmetics',
            quantity: '1'
        },
        {
            code: 'skgslf',
            name: 'Second Prod',
            category: 'cosmetics',
            quantity: '7'
        },
    ]);

    

    return (
        <div className="card">
            <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                <Column field="code" header="Code"></Column>
                <Column field="name" header="Name"></Column>
                <Column field="category" header="Category"></Column>
                <Column field="quantity" header="Quantity"></Column>
            </DataTable>
        </div>
    );
}
        