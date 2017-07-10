import { Person } from './../familyEntities/Person';

export class Event {
    public EntityId: number;
    public Title: string;
    public Dates: EventDateTime;
    public EndDate: EventDateTime;
    public Location: Location;
    public Details: string; 
    public EventType: eventType;
    public OrganiserId: number;
    
    constructor(entityId: number){
        this.EntityId = entityId;
    }

}

export class EventDateTime{

    public startDate: Date;
    public endDate: Date;
    
}

export class Location {
    public Title: string;
    public Address1: string;
    public Address2: string;
    public City: string;
    public State: string;
    public PostCode: number;
    public Geo: any; 
    public PhoneNumber: string;

}

export enum eventType {
    Gathering,
    Birthday,
    Funeral,
    Wedding,
    Other
}

export enum eventStatus {
    Pending,
    Cancelled,
    Expired
}