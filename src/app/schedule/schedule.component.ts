import { Component, OnInit, Input } from '@angular/core';
import {NotableService} from '../notable.service';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  displayedColumns: string[] = ['pos', 'patientName', 'time', 'kind'];
  constructor(public ns: NotableService) { }
  ngOnInit() {
  }
  @Input() event: Event;
}
