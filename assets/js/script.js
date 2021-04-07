const today = moment();
console.log(today.format());

var currentDay = document.querySelector("#currentDay").innerHTML

let renderClock = function() {
  document.querySelector("#currentDay").innerHTML = `${moment().format('MMMM Do YYYY, h:mm:ss a')}`;
  var time9 = moment('09:00:00', 'hh:mm:ss');
  var time10 = moment('10:00:00', 'hh:mm:ss');
  var time11 = moment('11:00:00', 'hh:mm:ss');
  var time12 = moment('12:00:00', 'hh:mm:ss');
  var time1 = moment('13:00:00', 'hh:mm:ss');
  var time2 = moment('14:00:00', 'hh:mm:ss');
  var time3 = moment('15:00:00', 'hh:mm:ss');
  var time4 = moment('16:00:00', 'hh:mm:ss');
  var time5 = moment('17:00:00', 'hh:mm:ss');

  if (moment().isBefore(time9)) {
    document.querySelector("#nineAM").setAttribute("class", "future")
  }
  if (moment().isBefore(time10)) {
    document.querySelector("#tenAM").setAttribute("class", "future")
  }
  if (moment().isBefore(time11)) {
    document.querySelector("#elevenAM").setAttribute("class", "future")
  }
  if (moment().isBefore(time12)) {
    document.querySelector("#twelvePM").setAttribute("class", "future")
  }
  if (moment().isBefore(time1)) {
    document.querySelector("#onePM").setAttribute("class", "future")
  }
  if (moment().isBefore(time2)) {
    document.querySelector("#twoPM").setAttribute("class", "future")
  }
  if (moment().isBefore(time3)) {
    document.querySelector("#threePM").setAttribute("class", "future")
  }
  if (moment().isBefore(time4)) {
    document.querySelector("#fourPM").setAttribute("class", "future")
  }
  if (moment().isBefore(time5)) {
    document.querySelector("#fivePM").setAttribute("class", "future")
  }
  

  if (moment().isAfter(time9)) {
    document.querySelector("#nineAM").setAttribute("class", "past")
  }
  if (moment().isAfter(time10)) {
    document.querySelector("#tenAM").setAttribute("class", "past")
  }
  if (moment().isAfter(time11)) {
    document.querySelector("#elevenAM").setAttribute("class", "past")
  }
  if (moment().isAfter(time12)) {
    document.querySelector("#twelvePM").setAttribute("class", "past")
  }
  if (moment().isAfter(time1)) {
    document.querySelector("#onePM").setAttribute("class", "past")
  }
  if (moment().isAfter(time2)) {
    document.querySelector("#twoPM").setAttribute("class", "past")
  }
  if (moment().isAfter(time3)) {
    document.querySelector("#threePM").setAttribute("class", "past")
  }
  if (moment().isAfter(time4)) {
    document.querySelector("#fourPM").setAttribute("class", "past")
  }
  if (moment().isAfter(time5)) {
    document.querySelector("#fivePM").setAttribute("class", "past")
  }



  };

renderClock();
setInterval(renderClock, 1000);


var nineButton = document.querySelector("#buttonNine");
var tenButton = document.querySelector("#buttonTen");
var elevenButton = document.querySelector("#buttonEleven");
var twelveButton = document.querySelector("#buttonTwelve");
var oneButton = document.querySelector("#buttonOne");
var twoButton = document.querySelector("#buttonTwo");
var threeButton = document.querySelector("#buttonThree");
var fourButton = document.querySelector("#buttonFour");
var fiveButton = document.querySelector("#buttonFive");
var clearButton = document.querySelector("#clear");

moment().format('MMMM Do YYYY, h:mm:ss a')

function addToDayNine() {
var nineAM = document.querySelector("#nineAM").value;
localStorage.setItem("9am", nineAM);
};

function addToDayTen() {
  var tenAM = document.querySelector("#tenAM").value;
  localStorage.setItem("10am", tenAM);
};

function addToDayEleven() {
  var elevenAM = document.querySelector("#elevenAM").value;
  localStorage.setItem("11am", elevenAM);
};

function addToDayTwelve() {
  var twelvePM = document.querySelector("#twelvePM").value;
  localStorage.setItem("12pm", twelvePM);
};

function addToDayOne() {
  var onePM = document.querySelector("#onePM").value;
  localStorage.setItem("1pm", onePM);
};

function addToDayTwo() {
  var twoPM = document.querySelector("#twoPM").value;
  localStorage.setItem("2pm", twoPM);
};

function addToDayThree() {
  var threePM = document.querySelector("#threePM").value;
  localStorage.setItem("3pm", threePM);
};

function addToDayFour() {
  var fourPM = document.querySelector("#fourPM").value;
  localStorage.setItem("4pm", fourPM);
};

function addToDayFive() {
  var fivePM = document.querySelector("#fivePM").value;
  localStorage.setItem("5pm", fivePM);
};

function clearStorage() {
  localStorage.clear();
  location.reload();
}


nineButton.addEventListener("click", addToDayNine);
tenButton.addEventListener("click", addToDayTen);
elevenButton.addEventListener("click", addToDayEleven);
twelveButton.addEventListener("click", addToDayTwelve);
oneButton.addEventListener("click", addToDayOne);
twoButton.addEventListener("click", addToDayTwo);
threeButton.addEventListener("click", addToDayThree);
fourButton.addEventListener("click", addToDayFour);
fiveButton.addEventListener("click", addToDayFive);
clearButton.addEventListener("click", clearStorage);

document.getElementById("nineAM").value = localStorage.getItem("9am");
document.getElementById("tenAM").value = localStorage.getItem("10am");
document.getElementById("elevenAM").value = localStorage.getItem("11am");
document.getElementById("twelvePM").value = localStorage.getItem("12pm");
document.getElementById("onePM").value = localStorage.getItem("1pm");
document.getElementById("twoPM").value = localStorage.getItem("2pm");
document.getElementById("threePM").value = localStorage.getItem("3pm");
document.getElementById("fourPM").value = localStorage.getItem("4pm");
document.getElementById("fivePM").value = localStorage.getItem("5pm");
