
import { Builder, By, Key, until } from 'selenium-webdriver';
import 'selenium-webdriver/chrome';
import 'chromedriver';
import Util from './utils';

const rootURL = 'https://www.akelius.de/en/search/apartments/osten/berlin/list';
const d = new Builder()
  .forBrowser('chrome')
  .build();
let driver, el, actual, expected, utils;

it('waits for the driver to start', () => {
  return d.then(_d => {
    driver = _d;
    utils = new Util(driver, 20000);
    jest.setTimeout(30000);
  })
})

it('initialises the context', async () => {
  await driver
    .manage()
    .window()
    .setPosition(0, 0)
  await driver
    .manage()
    .window()
    .setSize(1280, 1024)
  await driver.get(rootURL)
})

it('Look for a home - specific location', async () => {
  const listLinks = await utils.getElementByCss('.list-links');
  const text = await listLinks.getText();
  const lookup = /berlin-(charlottenburg|wilmersdorf)/ig;

  const matches = text.match(lookup);

  if (matches && matches.length) {
    console.log(`Amout of Homes found for the specific location: ${matches.length - 1}`);
  }
  else {
    console.log('No Homes found');
  }
})
