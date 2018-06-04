import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-table-cards',
  templateUrl: './table-cards.component.html',
  styleUrls: ['./table-cards.component.css']
})
export class TableCardsComponent implements OnInit {
 
  @Input() datatable : string;
  @Input() index: number;
  constructor(private service: DataService) { }

  ngOnInit() {
    
  }

  ontableClick(){

  }

}
