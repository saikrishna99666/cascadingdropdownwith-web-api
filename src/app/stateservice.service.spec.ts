import { TestBed, inject } from '@angular/core/testing';

import { StateserviceService } from './stateservice.service';

describe('StateserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StateserviceService]
    });
  });

  it('should be created', inject([StateserviceService], (service: StateserviceService) => {
    expect(service).toBeTruthy();
  }));
});
