import { mockFamily } from './mockData'; 
import { Family } from './../familyEntities/Family';
import { Person } from './../familyEntities/Person';
import { Event, EventDateTime, Location } from './../eventEntities/event';

export class database{

    private _families: Array<Family>;
    private _events: Array<Event>;
    private _people: Array<Person>;


    constructor(){
        this._families = new Array<Family>();
        this._events = new Array<Event>();
        this._people = new Array<Person>();
        
        this.initMockData();
    }

    public getFamily(familyId: number): Family{
        return this._families.find(function(e){
            return e.EntityId === familyId;
        });
    }

    public getFamilies(): Family[] {
        return this._families;
    }

    public getPerson(personId: number): Person{
        return this._people.find(function(p){
            return p.EntityId === personId;
        });
    }

    public getEvents(): Array<Event>{
        return this._events;
    }

    private initMockData(){

        let mock = new mockFamily().getMockData();
        for(var fid = 0; fid < mock.Families.length; fid++){
            let f= new Family(mock.Families[fid].EntityId);

            for(var i = 0; i < mock.Families[fid].FamilyMembers.length; i++){
                let p = new Person(mock.Families[fid].FamilyMembers[i].EntityId);
                p.FirstName = mock.Families[fid].FamilyMembers[i].FirstName;
                p.LastName = mock.Families[fid].FamilyMembers[i].LastName;
                f.FamilyMembers.push(p);
                this._people.push(p)
            }
            this._families.push(f);
        }
        for(var eid = 0; eid < mock.Events.length; eid++){
            this._events.push(mock.Events[eid]); 
        }           
    }
}

