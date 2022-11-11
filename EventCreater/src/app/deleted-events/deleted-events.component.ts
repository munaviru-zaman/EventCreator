import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-deleted-events',
  templateUrl: './deleted-events.component.html',
  styleUrls: ['./deleted-events.component.css'],
})
export class DeletedEventsComponent implements OnInit {
  deletedArray: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private service: ServiceService
  ) {}

  ngOnInit(): void {
    this.loaddata();
  }
  loaddata() {
    var userId = JSON.parse(localStorage.getItem('user_id') || '');
    this.service.deletedEvents(userId).subscribe((result: any) => {
      if (result) {
        this.deletedArray = result;
        this.loaddata();
      }
    });
  }

  createEvent() {
    this.router.navigateByUrl('eventAdder');
  }
}
