import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  tables = [];
  constructor(private service : DataService) { }

  ngOnInit() {
    this.tables = this.service.getTables();
  }

}
