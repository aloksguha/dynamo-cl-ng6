import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit, OnDestroy {
  tables: string[] = [];
  configChangeSubscriber: Subscription;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.getTablesFromDB();
    this.configChangeSubscriber = this.service.configChanged.subscribe(
      (data: string) => {
        this.getTablesFromDB();
      }
    );
  }

  ngOnDestroy() {
    this.configChangeSubscriber.unsubscribe();
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
