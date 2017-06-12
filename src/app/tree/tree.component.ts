import { Component, OnInit } from '@angular/core';
import { FamilyTreeService } from './../services/family-tree.service'
import { RouterModule, Routes } from '@angular/router';
import { Person } from './../../model/familyEntities/person';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

  private _nodeId: number;
  public People: Person[];

  constructor(private treeService: FamilyTreeService) {
    this._nodeId = 1
   }

  ngOnInit() {
    this.treeService.getTree(this._nodeId).then(people => this.People = people);
  }

}
