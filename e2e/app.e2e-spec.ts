import { FamilyRenunionPage } from './app.po';

describe('family-renunion App', function() {
  let page: FamilyRenunionPage;

  beforeEach(() => {
    page = new FamilyRenunionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
