import { ZzPage } from './app.po';

describe('zz App', function() {
  let page: ZzPage;

  beforeEach(() => {
    page = new ZzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
