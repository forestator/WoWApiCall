import { TestBed, inject } from '@angular/core/testing';

import { RealmServiceService } from './realm-service.service';

describe('RealmServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RealmServiceService]
    });
  });

  it('should be created', inject([RealmServiceService], (service: RealmServiceService) => {
    expect(service).toBeTruthy();
  }));
});
