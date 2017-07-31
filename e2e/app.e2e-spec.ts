import { Assignment6.1Page } from './app.po';

describe('assignment6.1 App', () => {
  let page: Assignment6.1Page;

  beforeEach(() => {
    page = new Assignment6.1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
