jest.setMock('selenium-webdriver', webdriver);
// This file was generated using Selenium IDE
const tests = require("./commons.js");
global.Key = require('selenium-webdriver').Key;
global.URL = require('url').URL;
global.BASE_URL = configuration.baseUrl || 'https://jlsgrand-angular-princess-lps.stackblitz.io';
let vars = {};
jest.setTimeout(300000);
describe("Default Suite", () => {
  it("Test Princess", async () => {
    await tests["Test Princess"](driver, vars);
    expect(true).toBeTruthy();
  });
});
beforeEach(() => {
  vars = {};
});
afterEach(async () => (cleanup()));