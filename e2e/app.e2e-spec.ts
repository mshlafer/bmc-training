import { BmcCoursePage } from './app.po';

describe('bmc-course App', function() {
  let page: BmcCoursePage;

  beforeEach(() => {
    page = new BmcCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
