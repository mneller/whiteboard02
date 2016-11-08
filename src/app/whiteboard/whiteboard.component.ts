import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ellzap-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.css'],
})
export class WhiteboardComponent implements OnInit {

  wbTitle: String = 'Whiteboard Lesson 01';

  constructor() { }

  ngOnInit() {
  }

}
