import { ExperimentalToolingPage } from './app.po';

describe('experimental-tooling App', function() {
  let page: ExperimentalToolingPage;

  beforeEach(() => {
    page = new ExperimentalToolingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
