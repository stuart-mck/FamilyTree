let entityId = 0;
let family = new Family(entityId++);

let root = new Person(entityId++);
root.FirstName = "George";
root.LastName = "Bryce";
let wife = new Person(entityId++);

root.Relationships.push(new Spouse(entityId++, root, wife, null));




//exports family;


