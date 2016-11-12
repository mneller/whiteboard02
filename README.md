# Whiteboard02

This has been started as a mirror of whiteboard01 (https://help.github.com/articles/duplicating-a-repository/)

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.18.

This is a first simple exercise on a series of whiteboard examples for __Angular 2__. 

The story is to create two sticky notes and make them movable around on the whiteboard/website.

## Components

This example use 2 Component. One component is the __Whiteboard__ component and the other is the __Sticker__ component. 
There is little special on this components as the sticker are made movable by the directive __Draggable__.
Both components are created by 'ng g component Whiteboard' and 'ng g component Sticker'

# Directives
The example is using the Directive __Draggable__ for moving the component. It assigns 'HostListeners' for the events 'mouse-down', 'mouse-up', 'mouse-move'. 

The 'mouse-down' notes the coordinates to ensure that the elmement is following the 'mouse-moves' until there is 'mouse-up'

Here is the central function for the movement:

```TypeScript
@HostListener('mousemove', ['$event']) onMousemove(event) {
    if (this.dragMode) {
      // calculate the move in PX since mouse down
      const deltaLeft = event.clientX - this.mouseDownLeft;
      const deltaTop = event.clientY - this.mouseDownTop;

      const newLeft = (this.draggableLeft + deltaLeft) + 'px';
      const newTop = (this.draggableTop + deltaTop) + 'px';
      this.element.nativeElement.style.left  = newLeft;
      this.element.nativeElement.style.top = newTop;
    }
``` 
