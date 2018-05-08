// var firebase = require("firebase");



// Leave out Storage
//require("firebase/storage");

// Initialize Firebase
  // var config = {
  //   apiKey: "AIzaSyAvcpURPx5O22GQJHiJUc8yT32PaXLS19U",
  //   authDomain: "webcrawl-ae6ad.firebaseapp.com",
  //   databaseURL: "https://webcrawl-ae6ad.firebaseio.com",
  //   projectId: "webcrawl-ae6ad",
  //   storageBucket: "webcrawl-ae6ad.appspot.com",
  //   messagingSenderId: "494351860955"
  // };
  // firebase.initializeApp(config);

var express = require('express');
var app = express();
var post=[];
var b1, b2, b3, b4, b5, serial, amount, date;


var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until,
    Keys = webdriver.Key;    



app.listen(5000, function () {
  console.log('app listening on port 5000!');
});
require('chromedriver');


var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

// var request = require('request');
var product_list = [];
driver.get('https://www.woolworths.com.au/');
var myList = ['yogurt'];
myList.map(function(item){
	var input = driver.findElement(By.xpath('//*[@id="headerSearch"]'));
	input.click();
	input.sendKeys(item);
  driver.findElement(By.className('headerSearch-autocompleteSearchButton')).click();
});



app.get('/', function (req, res) {
  res.send(product_list);
});


