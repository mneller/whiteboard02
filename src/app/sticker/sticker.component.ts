import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ellzap-sticker',
  templateUrl: './sticker.component.html',
  styleUrls: ['./sticker.component.css'],
})
export class StickerComponent implements OnInit {
  stickerText:String = 'HugoTest';
  @Input() topValue:number;
  @Input() leftValue:number;
  constructor() { }

  ngOnInit() {
  }

}
