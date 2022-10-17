import React, { useState, useContext, useEffect,useRef,useCallback, } from 'react'
import { Button, Container } from 'react-bootstrap'
import { AgGridReact } from 'ag-grid-react';
import { Context } from '../index';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import Tabs from '../components/Tabs';
const setPrinterFriendly = (api) => {
  const eGridDiv = document.querySelector('#myGrid');
  eGridDiv.style.height = '';
  eGridDiv.style.width = '';
  api.setDomLayout('print');
};

const setNormal = (api) => {
  const eGridDiv = document.querySelector('#myGrid');
  eGridDiv.style.width = '100%';
  eGridDiv.style.height = '500px';
  api.setDomLayout();
};

const dateFilterParams = {
    comparator: function (filterLocalDateAtMidnight, cellValue) {
      var dateAsString = cellValue;
      if (dateAsString == null) return -1;
      var dateParts = dateAsString.split('-');
      var cellDate = new Date(
        Number(dateParts[2]),
        Number(dateParts[1]) -1,
        Number(dateParts[0])
      );
      if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
        return 0;
      }
      if (cellDate < filterLocalDateAtMidnight) {
        return -1;
      }
      if (cellDate > filterLocalDateAtMidnight) {
        return 1;
      }
    },
    browserDatePicker: true,
  };

const AllProvider = () => {
    const gridRef = useRef();
    
    
    const [rowData, setRowData] = useState();
    const [gridApi, setGridApi] = useState();
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    useEffect(() =>{
        fetch('http://localhost:5000/api/provider')
   .then(result => result.json())
   .then(rowData => setRowData(rowData))
        
        
    },[])
    
    const columns = [{headerName: "№ Заявки", field: 'id',resizable: true },
    {headerName: "Застройщик", field: 'name',resizable: true },
    {headerName: "Email", field: 'email',resizable: true },
    {headerName: "Телефон", field: 'phone',resizable: true },
    {headerName: "Район", field: 'area',resizable: true },
    
    {headerName: "Адрес", field: 'address' ,resizable: true},
    {headerName: "Комнаты", field: 'rooms',resizable: true },
    {headerName: "Площадь", field: 'square',resizable: true  },
    {headerName: "Этажность", field: 'floor' ,resizable: true},
    {headerName: "Тип дома", field: 'typeHome',resizable: true },
    {headerName: "Статус постройки", field: 'statusbuild',resizable: true },
    {headerName: "Дата", field: 'date', filter: 'agDateColumnFilter', filterParams: dateFilterParams, },
]

   const defColumnDefs = {flex:1, sortable: true, width: 100,editable: true,}
  
   
   const onGridReady = (params) => {
       setGridApi(params)
       
   }

   const onBtExport = useCallback(() => {
    gridRef.current.api.exportDataAsExcel();
  }, []);

   const getFilterType = () => {
    if (startDate !== '' && endDate !== '') return 'inRange';
    else if (startDate !== '') return 'greaterThan'
    else if (endDate !== '') return 'lessThan' 
   }
    useEffect(() => {
        if (gridApi) {
            if (startDate !== '' && endDate !== '' && startDate > endDate) {
              alert("Неправильно выбран диапазон")
              setEndDate('')
            } else {
              var dateFilterComponent = gridApi.api.getFilterInstance('date');
              dateFilterComponent.setModel({
                type: getFilterType(),
                dateFrom: startDate ? startDate : endDate,
                dateTo: endDate,
              });
              gridApi.api.onFilterChanged();
            }
      
          }
      
      
    }, [startDate, endDate])
    
    
    const onBtPrint = useCallback(() => {
      const api = gridRef.current.api;
      setPrinterFriendly(api);
      setTimeout(function () {
        window.print();
        setNormal(api);
      }, 3000);
    }, []);
    const onFirstDataRendered = useCallback((params) => {
      gridRef.current.api.expandAll();
    }, []);
    return (
        <div className='mt-2 p-3'>
          <Tabs/>
            <h2>Выберите диапазон для отчетов по заявкам на продажу </h2>
            
      
           <div id='myGrid' className="ag-theme-alpine  mt-3" style={{height: 500}}>
           
            <b>От :</b><input className='m-2' type="date"  style={{height: 28}} value={startDate} onChange={e => setStartDate(e.target.value) } />
            <b>До :</b>3<input className='m-2' type="date" value={endDate} style={{height: 28}} onChange={e => setEndDate(e.target.value) }  />
           
            <Button size="sm" variant="success" className='mb-1' onClick={onBtExport}>Экспорт в .xlsx </Button>
              
           
               <AgGridReact
               ref={gridRef}
                rowData={rowData}
                columnDefs={columns}
                defaultColDef= {defColumnDefs}
                onGridReady={onGridReady} 
                animateRows={true} 
                rowSelection={'multiple'}
                suppressColumnVirtualisation={true}
                onFirstDataRendered={onFirstDataRendered}
                
                >
                 
            </AgGridReact>
        </div> 
        </div>
    )
}

export default AllProvider