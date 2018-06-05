import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm }   from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title : string = 'DynamoDB Client'
  constructor() { 
  }

  ngOnInit() {
  }

  onChangeconfig(form: NgForm){
    const formVal = form.value;
    console.log(formVal); 
    // submit form
    alert('Config Updated !! ')
  }

  fillDefault(form: NgForm){
    const formVal = form.value;
    console.log(formVal); 
    form.resetForm({
      host:"http://localhost/",
      password:"",
      port:"8000",
      region:"us-east-1",
      username:""
    });
    
  }

}
