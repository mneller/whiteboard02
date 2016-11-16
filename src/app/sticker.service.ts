import { Injectable } from '@angular/core';
import { STICKERS } from './sticker-mock';
import { Sticker } from "./sticker";

@Injectable()
export class StickerService {
  stickers = STICKERS;

  createNewSticker(): void {
    let sticker = new Sticker();
    sticker.leftValue = 0;
    sticker.topValue = 0;
    sticker.stickerText = "hugo...";
    this.stickers.push(sticker);
  }

  getSticker(): Sticker[] {
    return this.stickers;
  }
  constructor() { }

}
