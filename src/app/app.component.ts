import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ag-grid-demo';

  columnDefs = [
    {
      headerName: 'Make', 
      field: 'make',
      sortable: true, //允许排序
      filter: true, //允许条件筛选
      editable: true, //允许编辑表格
      enableColResize: true //允许拖动列
      //checkboxselection:true
    },
    {
      headerName: 'Model', 
      field: 'model',
      sortable: true,
      filter: true
    },
    {
      headerName: 'Price', 
      field: 'price',
      sortable: true,
      filter: true
    },
    {
      headerName: 'Date', 
      field: 'date',
      sortable: true,
      filter: true
    }
];

  rowData = [
    { 
      make: 'Toyota', 
      model: 'Celica', 
      price: 35000,
      date: '2022-01-05' 
    },
    { 
      make: 'Ford', 
      model: 'Mondeo', 
      price: 32000,
      date: '2022-01-10'
     },
    { 
      make: 'Porsche', 
      model: 'Boxter', 
      price: 72000,
      date: '2021-12-10'
     }
];
}
