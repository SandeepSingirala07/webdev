import { TestBed } from '@angular/core/testing';

import { AssignmentEmployeeServiceService } from './assignment-employee-service.service';

describe('AssignmentEmployeeServiceService', () => {
  let service: AssignmentEmployeeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignmentEmployeeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
