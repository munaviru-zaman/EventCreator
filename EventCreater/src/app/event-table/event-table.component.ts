import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-table',
  templateUrl: './event-table.component.html',
  styleUrls: ['./event-table.component.css'],
})
export class EventTableComponent implements OnInit {
  eventsArray: any;
  eventname: any;
  userid: any;
  priority: any;
  eventdate: any;

  currentUser: any;
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    const userId = JSON.parse(localStorage.getItem('user_id') || '');
    this.http
      .get('http://localhost:3000/events/' + userId)
      .subscribe((result: any) => {
        if (result) {
          console.log(result);
          this.eventsArray = result;
        }
      });
  }

  deleteDiv(name: any, date: any) {
    console.log(name, date);
    this.currentUser = JSON.parse(localStorage.getItem('user_id') || '');
    const event_name = name;
    const event_date = date;
    return this.http
      .get('http://localhost:3000/deleteevent/' + event_name + '/' + event_date)
      .subscribe((result: any) => {
        if (result) {
          this.eventname = result.eventname;
          this.eventdate = result.eventdate;
          this.userid = result.userid;
          this.priority = result.priority;
        }
      });
  }
  cancelDiv() {
    this.currentUser = '';
  }
  eventdelete() {
    var event_name = this.eventname;
    var event_date = this.eventdate;
    var userId = this.userid;
    var priority = this.priority;

    const newbody = {
      event_name,
      event_date,
      userId,
      priority,
    };
    console.log(newbody);

    return this.http
      .delete('http://localhost:3000/deleting/' + event_name + '/' + event_date)
      .subscribe((result: any) => {
        if (result) {
          alert(result.message);
          this.http
            .post('http://localhost:3000/deletedEvent', newbody)
            .subscribe((result: any) => {});
          this.router.navigateByUrl('deletedevents');
        }
      });
  }

  createEvent() {
    this.router.navigateByUrl('eventAdder');
  }
}
