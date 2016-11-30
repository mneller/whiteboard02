import { Component, OnInit} from '@angular/core';
import {Sticker} from "../sticker";
import {StickerService} from "../sticker.service";


@Component({
  selector: 'ellzap-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css'],
  providers: [StickerService]
})

export class WhiteboardComponent implements OnInit{
  stickers: Sticker[];
  selectedSticker: Sticker;

  wbTitle: String = 'Whiteboard Lesson 02';

  constructor(private stickerService: StickerService) {}

  newSticker() {
    this.stickerService.createNewSticker();
    this.stickers = this.stickerService.getStickers();
  }

  ngOnInit() {
    this.stickers = this.stickerService.getStickers();
  }
}
