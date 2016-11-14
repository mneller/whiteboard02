# Whiteboard02

This has been started as a mirror of whiteboard01 (https://help.github.com/articles/duplicating-a-repository/)

This is a 2nd simple exercise on a series of whiteboard examples for __Angular 2__. 

As Whiteboard01 is version is developming the whiteboard further. 
 
# Installation:
This repo is tested by usage for Webstorm. So to start this you should create this by creating a new project by cloning this repo. The second step is to right click on the 'package.json' and run an 'npm install'. 
After this you could be run the application by 'npm start' or performing the test by 'npm test' and 'npm e2e'. 

# User Stories:
1. The developer should be able to create sticker notes with different texts.
2. The user should be able to add new sticker notes
3. The user should be able to delete an existing sticker note

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
