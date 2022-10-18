const webdriver = require("selenium-webdriver");
const chromeDriver = require("chromedriver"); //chrome
var ie = require("selenium-webdriver/ie");
var path = require("iedriver").path;

function searchIDonBrowser() {
  let url =
    "https://join.zoho.com/assist-join?key=" +
    newString +
    "&language=en&email=" +
    clientName;
  //   var driver = new webdriver.Builder().forBrowser('internet explorer').build();
  //   var driver = new webdriver.Builder().forBrowser('MicrosoftEdge').build();
  var driver = new webdriver.Builder().forBrowser("chrome").build();
  driver.get(url).then(function () {
    driver.findElement(webdriver.By.id("download-btn-full")).click().then(function(){
        driver.getTitle().then(function (title){
            setTimeout(function(){
                console.log(title);
                driver.quit();
            },5000)
        })
    })
  });
}

searchIDonBrowser();
