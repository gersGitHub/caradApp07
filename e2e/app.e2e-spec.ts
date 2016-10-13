import { CaradApp07Page } from './app.po';

describe('carad-app07 App', function() {
  let page: CaradApp07Page;

  beforeEach(() => {
    page = new CaradApp07Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
