import { Component} from '@angular/core';
import {Sticker} from '../sticker';

const STICKERS: Sticker[] = [
  {stickerText: 'Sticker1', topValue:50, leftValue:50},
  {stickerText: 'Sticker2', topValue:100, leftValue:100},
  {stickerText: 'Sticker3', topValue:150, leftValue:150},
];

@Component({
  selector: 'ellzap-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css'],
})
export class WhiteboardComponent {
  stickers = STICKERS;
  wbTitle: String = 'Whiteboard Lesson 02';
}
