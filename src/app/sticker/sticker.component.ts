import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ellzap-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css'],
})
export class StickerComponent {
  @Input() stickerID: number;
  @Input() stickerText: string;
  @Input() topValue: number;
  @Input() leftValue: number;
  @Output() selected = new EventEmitter();
}
