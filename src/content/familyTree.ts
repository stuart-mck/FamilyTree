import { Person } from './../model/familyEntities/person';
import { Family } from './../model/familyEntities/family';

let entityId = 0;
let family = new Family(entityId++);

let root = new Person(entityId++);
root.FirstName = "George";
root.LastName = "Bryce";
let wife = new Person(entityId++);






//exports family;


