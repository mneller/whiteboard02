import { Injectable } from '@angular/core';
import { STICKERS } from './sticker-mock';
import { Sticker } from "./sticker";

@Injectable()
export class StickerService {
  stickers = STICKERS;
  maxId = STICKERS.length;

  createNewSticker(): void {
    let sticker = new Sticker();
    sticker.stickerID = (++this.maxId);
    sticker.leftValue = 0;
    sticker.topValue = 0;
    sticker.stickerText = "hugo...";
    this.stickers.push(sticker);
  }

  deleteSticker(s:Sticker){
    var index = this.stickers.indexOf(s, 0);
    if (index > -1) {
      this.stickers.splice(index, 1);
    }
  }
  getSticker(id: number): Sticker {
    return this.stickers.filter(s => s.stickerID === id)[0];
  }

  getStickers(): Sticker[] {
    return this.stickers;
  }
  constructor() { }

}
