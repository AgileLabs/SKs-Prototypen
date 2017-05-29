import { browser, element, by } from 'protractor';

export class PrototypenPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('skp-root h1')).getText();
  }
}
