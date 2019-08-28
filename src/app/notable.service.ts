import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotableService {
  schedule : any;
  physicians : any;
  constructor() { }

  setSchedule(val){
    this.schedule = val;
  }
  getSchedule(){
    return this.schedule;
  }
  setPhysicians(val){
    this.physicians = val;
  }
  getPhysicians(){
    return this.physicians;
  }
}
