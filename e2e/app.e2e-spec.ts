import { VtcompanionPage } from './app.po';

describe('vtcompanion App', function() {
  let page: VtcompanionPage;

  beforeEach(() => {
    page = new VtcompanionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
