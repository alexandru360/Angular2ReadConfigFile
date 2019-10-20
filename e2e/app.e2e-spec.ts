import { AngualrTutorialPage } from './app.po';

describe('angualr-tutorial App', () => {
  let page: AngualrTutorialPage;

  beforeEach(() => {
    page = new AngualrTutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
