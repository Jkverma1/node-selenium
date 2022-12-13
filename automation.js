const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

let options = new chrome.options();
options.addArguments("--headless");
options.addArguments("--disable-gpu");
options.addArguments("--no-sandbox");

let driver = new webdriver.Builder()
  .forBrowser("chrome")
  .setChromeOptions(options)
  .build();

driver.get("https://www.google.com");
driver.quit();
