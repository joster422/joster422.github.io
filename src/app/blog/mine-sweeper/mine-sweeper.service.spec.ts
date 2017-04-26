import { TestBed, inject } from '@angular/core/testing';

import { MineSweeperService } from './mine-sweeper.service';

describe('MineSweeperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MineSweeperService]
    });
  });

  it('should ...', inject([MineSweeperService], (service: MineSweeperService) => {
    expect(service).toBeTruthy();
  }));
});
