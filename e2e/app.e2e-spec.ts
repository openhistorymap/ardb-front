import { ArdbPage } from './app.po';

describe('ardb App', () => {
  let page: ArdbPage;

  beforeEach(() => {
    page = new ArdbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
