import { mockFamily } from './familyTree'; 
import { Family } from './../familyEntities/Family';
import { Person } from './../familyEntities/Person';

export class database{

    private _family: Family;

    constructor(){
        this._family = this.buildFamily();
        
    }

    public getFamily(): Family{
        return this._family;
    }

    private buildFamily(): Family{

        var mock = new mockFamily().getMockData()[0];
        let f= new Family(mock.EntityId);

        for(var i = 0; i < mock.FamilyMembers.length; i++){
            let p = new Person(mock.FamilyMembers[i].EntityId);
            p.FirstName = mock.FamilyMembers[i].FirstName;
            p.LastName = mock.FamilyMembers[i].LastName;
            f.FamilyMembers.push(p);
        }
        return f;
    }
}

