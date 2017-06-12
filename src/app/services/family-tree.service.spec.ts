/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FamilyTreeService } from './family-tree.service';

describe('FamilyTreeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FamilyTreeService]
    });
  });

  it('should ...', inject([FamilyTreeService], (service: FamilyTreeService) => {
    expect(service).toBeTruthy();
  }));
});
