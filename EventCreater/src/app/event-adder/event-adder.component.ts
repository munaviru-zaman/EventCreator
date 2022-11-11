import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-event-adder',
  templateUrl: './event-adder.component.html',
  styleUrls: ['./event-adder.component.css'],
})
export class EventAdderComponent implements OnInit {
  user_id: any;
  e_name: any;
  e_date: any;

  priority: any = 'medium';
  currentUser: Boolean | undefined;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.user_id = JSON.parse(localStorage.getItem('user_id') || '');
    console.log(this.user_id);

    if (!localStorage.getItem('user_id')) {
      alert('Please Login Again');
      this.router.navigateByUrl('login');
    }
  }

  addEvent() {
    this.currentUser = true;
  }
  eventcancel() {
    this.currentUser = false;
  }
  eventcreate() {
    var event_name = this.e_name;
    var event_date = this.e_date;
    var userId = this.user_id;
    var priority = this.priority;

    const newEvent = {
      event_name,
      event_date,
      userId,
      priority,
    };

    return this.http
      .post('http://localhost:3000/eventcreate', newEvent)
      .subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
            localStorage.setItem('event_name', JSON.stringify(event_name));
            this.router.navigateByUrl('events');
          }
        },
        (result) => {
          alert(result.error.message);
        }
      );
  }

  logout() {
    localStorage.removeItem('user_id');
    this.router.navigateByUrl('login');
  }
}
