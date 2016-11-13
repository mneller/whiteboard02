import {Component, Input} from '@angular/core';

@Component({
  selector: 'ellzap-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css'],
})
export class StickerComponent {
  @Input() stickerText: string;
  @Input() topValue: number;
  @Input() leftValue: number;
}
