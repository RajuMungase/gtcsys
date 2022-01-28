import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() TableData:any = [];
  @Input() tbody:any;
  constructor() { }

  ngOnInit(): void {
    
  }
}