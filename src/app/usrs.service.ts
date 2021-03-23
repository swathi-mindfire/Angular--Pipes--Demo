import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsrsService {

  constructor() { }

  getAllUsers(){
    return  [
      {id:100,"name": "xyz",dob:new Date("1/1/2021"),"salary" :20000},
      {id:101,"name": "mnl",dob:new Date("2/1/2020"),"salary" :30000},
      {id:102,"name": "pqr",dob:new Date("3/1/2021"),"salary" :60000},
    ]
  }
}
