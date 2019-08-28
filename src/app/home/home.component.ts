import { Component, OnInit } from '@angular/core';
import {NotableService} from '../notable.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: any = {"physicians":[{"firstName":"Julius","lastName":"Hibbert","email":"hibberts@notablehealth.com","schedule":[{"pos":1,"patientName":"Sterling Archer","time":"8:00 AM","kind":"New Patient"},{"pos":2,"patientName":"Cyril Figis","time":"9:00 AM","kind":"Follow up"},{"pos":3,"patientName":"Ray Kane","time":"10:00 AM","kind":"New Patient"},{"pos":4,"patientName":"Lana Kane","time":"10:30 AM","kind":"Follow up"},{"pos":5,"patientName":"Pam Archer","time":"11:00 AM","kind":"New Patient"}]},{"firstName":"Algermop","lastName":"Krieger","email":"krieger@notablehealth.com","schedule":[{"pos":1,"patientName":"Sterling Figils","time":"8:00 AM","kind":"New Patient"},{"pos":2,"patientName":"Cyril Figis","time":"9:00 AM","kind":"Follow up"},{"pos":3,"patientName":"Ray Archer","time":"7:00 AM","kind":"New Patient"},{"pos":4,"patientName":"Lana Kane","time":"17:30 AM","kind":"Follow up"},{"pos":5,"patientName":"Pam Kane","time":"11:00 AM","kind":"New Patient"}]},{"firstName":"Nick","lastName":"Riviera","email":"riviera@notablehealth.com","schedule":[{"pos":1,"patientName":"Sterling Norman","time":"10:00 AM","kind":"New Patient"},{"pos":2,"patientName":"Cyril Figis","time":"9:00 AM","kind":"Follow up"},{"pos":3,"patientName":"Ray Archer","time":"12:00 AM","kind":"New Patient"},{"pos":4,"patientName":"Lana Figils","time":"12:30 AM","kind":"Follow up"},{"pos":5,"patientName":"Pam Archer","time":"15:00 AM","kind":"New Patient"}]}]};
  
  constructor(public ns: NotableService) { 
    this.ns.setPhysicians(this.data.physicians);
  }

  ngOnInit() {
  }
  public clickedEvent: Event;

  childEventClicked(event: Event) {
    this.clickedEvent = event;
  }

}
