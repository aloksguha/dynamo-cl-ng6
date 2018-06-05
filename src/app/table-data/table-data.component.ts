import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  selectedTable: string;
  tableData: any;
  colKeys: string[] = [];
  tablecontent: any[] = [];
  isTableContent: boolean = false;
 

  constructor(private route:ActivatedRoute, private router: Router, private service : DataService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) =>{
        this.selectedTable = params['tablename'];
        this.getTableDetails(this.selectedTable);
        this.colKeys =[];
      }
    )
  }


  getTableDetails(tableName: string): void {
    this.service.getTableDetails(tableName)
      .subscribe(
        restItems => {
           console.log(typeof restItems);
           console.log(restItems);
           this.tableData = restItems;
           this.tablecontent = restItems.Items;
           console.log(this.tablecontent);
           if(this.tablecontent && this.tablecontent.length > 0){
            this.isTableContent = true;
            for(var k in this.tablecontent[0]) 
              this.colKeys.push(k);
        }  

        }
      )
  }

}
