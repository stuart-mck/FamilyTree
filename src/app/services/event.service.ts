import { Injectable } from '@angular/core';
import { database } from './../../model/database/database';
import { Event, EventDateTime, eventType, Location } from './../../model/eventEntities/event';

@Injectable()
export class EventService {
   
   _database : database;
   
  constructor(private db:database) {
    
   }

  getAllActiveEvents(): Promise<Event[]>{
    let events = this.db.getEvents();
    return Promise.resolve(events);
  };

}