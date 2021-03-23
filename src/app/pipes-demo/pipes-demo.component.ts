import {Component,OnInit} from  '@angular/core';
import { UsrsService} from './usrs.service'


@Component({
  selector : 'app-pipes-demo',
  template : `'<h1>
  Inline template file 
  </h1>'`,
  templateUrl: './pipes-demo.component.html',
  styleUrls : ['./pipes-demo.component.css']


})


export class PipesDemoComponent implements OnInit{
  pageTitle="demo of pipes in angular";

  /*users :any[] = [
    {id:100,"name": "xyz",dob:new Date("1/1/2021"),"salary" :20000},
    {id:101,"name": "mnl",dob:new Date("2/1/2020"),"salary" :30000},
    {id:102,"name": "pqr",dob:new Date("3/1/2021"),"salary" :60000},
  ]*/

  users :any[];

  constructor(private  usrsService : UsrsService ){}
  ngOnInit(){
    this.users = this.usrsService.getAllUsers();

  }
  


}