//jshint version:6

const express = require("express");
const bodyParser = require("body-parser");
const webdriver = require("selenium-webdriver");
const chromeDriver = require("chromedriver"); //chrome
var ie = require("selenium-webdriver/ie");
var path = require("iedriver").path;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
var url;

app.post("/", (req, res) => {
  const webdriver = require("selenium-webdriver");
  const chromeDriver = require("chromedriver"); //chrome
  var ie = require("selenium-webdriver/ie");
  var path = require("iedriver").path;
  let SessionID = req.body.SessionID,
    clientName = req.body.NameClient;
  var newString = SessionID.replace(/-/g, "");
  var By = webdriver.By,
    until = webdriver.until;



  url =
    "https://join.zoho.com/assist-join?key=" +
    newString +
    "&language=en&email=" +
    clientName;
  // var driver = new webdriver.Builder().forBrowser("internet explorer").build();
  // var driver = new webdriver.Builder().forBrowser("MicrosoftEdge").build();

  res.redirect("/thankyou");
});

app.get("/thankyou", (req, res) => {
  var driver = new webdriver.Builder().forBrowser("chrome").build();
  driver.get(url);
  driver.executeScript(
    "document.querySelector('.report-abuse-container').style.display = 'none';"
  );
  // cb-container
  driver.executeScript(
    "document.querySelector('.cb-container').style.display = 'none';"
  );

  res.render("thankyou");
});

app.listen(process.env.PORT || 5000, (req, res) => {
  console.log("server started!");
});
