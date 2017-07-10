import { Component, OnInit } from '@angular/core';
import {EventService } from './../services/event.service';
import { Event } from './../../model/eventEntities/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public Events: Event[];
  public showDetail: boolean;

  constructor(private eventService: EventService) { 
    this.showDetail = false;
  }

  ngOnInit() {
    this.eventService.getAllActiveEvents().then(events  => this.Events = events);
  }

 public switchDetail(){
   this.showDetail = !this.showDetail;
 }
}
