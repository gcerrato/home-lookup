import { By, until } from 'selenium-webdriver';

export default class Util {
  constructor(driver, waitUntilTime) {
    this.driver = driver;
    this.waitUntilTime = waitUntilTime;
  }

  async getElementById(id) {
    const el = await this.driver.wait(until.elementLocated(By.id(id)), this.waitUntilTime);
    return await this.driver.wait(until.elementIsVisible(el), this.waitUntilTime);
  }

  async getElementByCss(selector) {
    const el = await this.driver.wait(until.elementLocated(By.css(selector)), this.waitUntilTime);
    return await this.driver.wait(until.elementIsVisible(el), this.waitUntilTime);
  }

  async getElementByXPath(xpath) {
    const el = await this.driver.wait(
      until.elementLocated(By.xpath(xpath)),
      this.waitUntilTime
    )
    return await this.driver.wait(until.elementIsVisible(el), this.waitUntilTime);
  }
}
