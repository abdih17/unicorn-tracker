'use strict';

var allUnicorns = [];
var allLocations = [];
var table = document.getElementById('table-container');
var formSubmission = document.getElementById('unicornFormSubmission')
var th = document.createElement('th');
table.appendChild(th);

function Unicorn(name, food, color, location){
  this.name = name;
  this.food = food;
  this.color = color;
  this.location = location;
  allUnicorns.push(this);
}

function Location(locationName){
  this.locationName = locationName;
  allLocations.push(this);
}

function createUnicorns(food, color) {
  for(var i = 0; i <= 10; i++){
    new Unicorn('unicorn'+ i, food, color);
  }
}

new Location('barn');
new Location('pasture');
new Location('meadow');

function renderTable() {
  for(var i = 0; i < allLocations.length; i++){
    console.log('hello');
    var td = document.createElement('td');
    td.textContent = allLocations[i].locationName;
    th.appendChild(td);
  }
}

createUnicorns('hay', 'white');
renderTable();

function handleSubmit(event) {
  event.preventDefault();


  var index = allUnicorns.map(u => u.name).indexOf(event.target.unicornMenu.value);

  console.log(event.target.locations.value);
  allUnicorns[index].locationName = event.target.locations.value;
}

formSubmission.addEventListener('submit', handleSubmit);
