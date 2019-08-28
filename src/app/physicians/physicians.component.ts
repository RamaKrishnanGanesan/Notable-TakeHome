import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {NotableService} from '../notable.service'

@Component({
  selector: 'app-physicians',
  templateUrl: './physicians.component.html',
  styleUrls: ['./physicians.component.scss']
})
export class PhysiciansComponent implements OnInit {

  constructor(public ns: NotableService) { }

  ngOnInit() {
  }
  populateSchedule(schedule){
    this.ns.setSchedule(schedule);
    this.eventClicked.emit(schedule);
  }
  @Input() physicians: any;

  @Output() eventClicked = new EventEmitter<Event>();
}
