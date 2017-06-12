import { Relationship } from './relationship';
import { gender } from './enums';
import { relationshipType } from './enums';

export class Person {
    public EntityId: number;
    public FirstName: string;
    public MiddleName: string;
    public LastName: string;
    public DateOfBirth: Date;
    public DateOfDeath: Date;
    public Relationships: Array<Relationship>;
    public Gender: gender;

    constructor(entityId: number){
        this.EntityId = entityId;
    }


    public getParents(): Array<Person> {
        return this.Relationships.filter(function (e){
            return e.RelationshipType === relationshipType.parent;
        }).map(function(p){
            return p.Relationship1
        });
    }

    public getChildren() : Array<Person>{
        return this.Relationships.filter(function (e){
            return e.RelationshipType === relationshipType.child;
        }).map(function(p){
            return p.Relationship1
        });
    } 

    public getSiblings(): Array<Person>{

        var parents = this.getParents();
        let siblings = new Array<Person>();

        for(var i = 0; i < parents.length; i++){
            let p = parents[i];
            var children = p.getChildren();
            for (var c = 0; c < children.length; c++)
                if (!siblings.some(function(child) {return child.EntityId === children[c].EntityId;})){
                    siblings.push(children[c]);
            }
        }

        return siblings;
    }

}