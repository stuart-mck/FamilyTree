import { Person } from './person';
import { relationshipType } from './enums';
import { relationshipStatus } from './enums';
import { gender } from './enums';

export class Relationship {
    public EntityId: number;
    public RelationshipType: relationshipType;
    public RelationshipStatus: relationshipStatus;
    public Relationship1: Person;
    public Relationship2: Person;
    public Children : Array<Person>;
    constructor(entityId: number, source: Person, target: Person){
        this.EntityId = entityId;
        this.Relationship1 = source;
        this.Relationship2 = target;
    }

    public addChild (entityId: number, firstName: string, lastName: string, middleName: string, dateOfBirth: Date, gender: gender) : Person {
        let child = new Person(entityId);
        child.FirstName = firstName;
        child.MiddleName = middleName;
        child.LastName = lastName;
        child.Gender = gender;
        child.DateOfBirth = dateOfBirth;

        this.Children.push(child);
        return child;
    }
}