import { Whiteboard01Page } from './app.po';

describe('whiteboard01 App', function() {
  let page: Whiteboard01Page;

  beforeEach(() => {
    page = new Whiteboard01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ellzap Learning');
  });
});
