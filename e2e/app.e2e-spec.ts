import { EndToEndPage } from './app.po';

describe('end-to-end App', () => {
  let page: EndToEndPage;

  beforeEach(() => {
    page = new EndToEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
