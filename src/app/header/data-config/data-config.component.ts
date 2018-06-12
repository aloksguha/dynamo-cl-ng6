import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-config',
  templateUrl: './data-config.component.html',
  styleUrls: ['./data-config.component.css']
})
export class DataConfigComponent implements OnInit {
  configData : any;
  configChangeSubscriber : Subscription;
  constructor(private service: DataService) { }

  ngOnInit() {
    this.getConfigFromDB();
    this.configChangeSubscriber = this.service.configChanged.subscribe(
      (data: string) => {
         this.getConfigFromDB();
      }
    )
  }


  getConfigFromDB(): void {
    this.service.getTables()
      .subscribe(
        restItems => {
           this.configData = restItems;
        }
      )
  }


}


// currentData = {
//   region: REGION,
//   endpoint: HOST+":"+PORT,
//   username: USERNAME,
//   password: PASSWORD,
//   accesskey: ACCESSKEY
