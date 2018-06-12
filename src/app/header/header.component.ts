import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm }   from '@angular/forms';
import { DataService } from '../data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : string = 'DynamoDB Client'
  constructor(private service:DataService) { 
  }

  ngOnInit() {
  }

  onChangeconfig(form: NgForm){
    const formVal = form.value;
    console.log(formVal); 
    this.service.sendConfig(formVal).subscribe(
      (data: any) => {
        console.log(data);
        alert('Config Updated !! ');
        this.service.configChanged.next('config_upated');
      }
    );
    
  }

  fillDefault(form: NgForm){
    const formVal = form.value;
    console.log(formVal); 
    form.resetForm({
      host:"http://localhost/",
      password:"",
      port:"8000",
      region:"us-east-1",
      username:"",
      accesskey:""
    });
    
  }

}
