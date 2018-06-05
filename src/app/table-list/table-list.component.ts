import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  tables : string[] = [];
  constructor(private service : DataService) { }

  ngOnInit() {
     this.getTablesFromDB();
  }

    getTablesFromDB(): void {
      this.service.getTables()
        .subscribe(
          restItems => {
             console.log(typeof restItems);
             console.log(restItems);
             this.tables = restItems.TableNames;
          }
        )
    }

}
