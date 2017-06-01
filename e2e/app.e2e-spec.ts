import { BrAngularMomentpickerPage } from './app.po';

describe('br-angular-momentpicker App', () => {
  let page: BrAngularMomentpickerPage;

  beforeEach(() => {
    page = new BrAngularMomentpickerPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to br!!'))
      .then(done, done.fail);
  });
});
