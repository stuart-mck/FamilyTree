import { Injectable } from '@angular/core';
import { database } from './../../model/database/database';
import { Person } from './../../model/familyEntities/person';

@Injectable()
export class FamilyTreeService {
   
   _database : database;
   
  constructor(private db:database) {
    
   }

  getTree(nodeId: number): Promise<Person[]>{
    let family = this.db.getFamily();
    let people = family.FamilyMembers;
    return Promise.resolve(people);
  };

}
