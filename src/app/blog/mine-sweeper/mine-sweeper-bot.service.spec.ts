import { TestBed, inject } from '@angular/core/testing';

import { MineSweeperBotService } from './mine-sweeper-bot.service';

describe('MineSweeperBotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MineSweeperBotService]
    });
  });

  it('should ...', inject([MineSweeperBotService], (service: MineSweeperBotService) => {
    expect(service).toBeTruthy();
  }));
});
