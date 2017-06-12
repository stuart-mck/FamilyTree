import { Family } from './model/family';
import { Person } from './model/person';
import { Spouse } from './model/spouse';


var   buildData = function(){
        let entityId = 0;
        let family = new Family(entityId++);

        let root = new Person(entityId++);
        root.FirstName = "George";
        root.LastName = "Bryce";
        let wife = new Person(entityId++);
        wife.FirstName = "Sheila"
        wife.LastName = "Something"

        root.Relationships.push(new Spouse(entityId++, root, wife, null));
        return family;
    }

exports.buildMockData  = buildData;


