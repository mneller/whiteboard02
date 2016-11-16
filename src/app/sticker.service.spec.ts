/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StickerService } from './sticker.service';

describe('Service: Sticker', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StickerService]
    });
  });

  it('should ...', inject([StickerService], (service: StickerService) => {
    expect(service).toBeTruthy();
  }));
});
