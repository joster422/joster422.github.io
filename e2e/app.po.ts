import { browser, element, by } from 'protractor';

export class Joster422.Github.IoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jsite-root h1')).getText();
  }
}
