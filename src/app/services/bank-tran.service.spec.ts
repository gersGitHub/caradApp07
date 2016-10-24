/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BankDetailService } from './bank-detail.service';

describe('Service: BankDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankDetailService]
    });
  });

  it('should ...', inject([BankDetailService], (service: BankDetailService) => {
    expect(service).toBeTruthy();
  }));
});
