import { LeadFrontPage } from './app.po';

describe('lead-front App', () => {
  let page: LeadFrontPage;

  beforeEach(() => {
    page = new LeadFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
