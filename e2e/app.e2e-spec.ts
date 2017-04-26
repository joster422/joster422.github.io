import { Joster422.Github.IoPage } from './app.po';

describe('joster422.github.io App', () => {
  let page: Joster422.Github.IoPage;

  beforeEach(() => {
    page = new Joster422.Github.IoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('jsite works!');
  });
});
