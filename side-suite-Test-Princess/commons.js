const utils = require("./utils.js");
const tests = {};
tests["Test Princess"] = async (driver, vars, opts = {}) => {
  await driver.get((new URL(`/`, BASE_URL)).href);
  try {
    await driver.manage().window().setRect({
      width: 747,
      height: 694
    });
  } catch (error) {
    console.log('Unable to resize window. Skipping.');
  };
  await driver.wait(until.elementLocated(By.css(`div:nth-child(2) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(2) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(5) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(5) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(6) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(6) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(6) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(6) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(2) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(2) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(2) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(2) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(2) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(2) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(2) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(2) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(2) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(2) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(2) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(2) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(2) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(2) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`app-princess-list`)), configuration.timeout);
  await driver.findElement(By.css(`app-princess-list`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`app-princess-list`)), configuration.timeout);
  await driver.findElement(By.css(`app-princess-list`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`app-princess-list`)), configuration.timeout);
  await driver.findElement(By.css(`app-princess-list`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`app-princess-list`)), configuration.timeout);
  await driver.findElement(By.css(`app-princess-list`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`app-princess-list`)), configuration.timeout);
  await driver.findElement(By.css(`app-princess-list`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`app-princess-list`)), configuration.timeout);
  await driver.findElement(By.css(`app-princess-list`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(2) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(2) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(2) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(2) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(2) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(2) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(2) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(2) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(2) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(2) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(6) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(6) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return driver.actions({
      bridge: true
    }).doubleClick(element).perform();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3)`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3)`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(4) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(4) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
  await driver.wait(until.elementLocated(By.css(`div:nth-child(3) button`)), configuration.timeout);
  await driver.findElement(By.css(`div:nth-child(3) button`)).then(element => {
    return element.click();
  });
}
module.exports = tests;