import { TestBed } from '@angular/core/testing';

import { EmployeeserviceService } from './employeservice.service';

describe('EmployeeserviceService', () => {
  let service: EmployeeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
