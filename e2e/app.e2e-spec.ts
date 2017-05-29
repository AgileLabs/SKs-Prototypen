import { PrototypenPage } from './app.po';

describe('prototypen App', () => {
  let page: PrototypenPage;

  beforeEach(() => {
    page = new PrototypenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('skp works!');
  });
});
