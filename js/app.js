'use strict';

let openingHours = ['6 am','7am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];


function getRandomNumber (minCustomers,maxCustomers){
  return Math.floor( Math.random() * (maxCustomers - minCustomers +1)+ minCustomers);
}

function Location (place,minCustomers,maxCustomers,avgCustomers){
  console.log(this);
  this.place=place;
  this.minCustomers=minCustomers;
  this.maxCustomers=maxCustomers;
  this.avgCustomers=avgCustomers;
  this.calculatedCookies= [];
  this.dailyTotalCookies= 0;
}

Location.prototype.getCalculatedCookies = function ( ){
  for (let i=0; i< openingHours.length; i++) {
    let cookiesPerHour = Math.round(getRandomNumber(this.minCustomers,this.maxCustomers)*this.avgCustomers);
    this.dailyTotalCookies+=cookiesPerHour;
    this.calculatedCookies.push(cookiesPerHour);
    console.log(this.calculatedCookies);}
};
  Location.prototype.render = function () {
    this.getCalculatedCookies();
  const container = document.getElementById('Branches'); // section
  console.log(container);
  const tableEl = document.createElement('table'); 
  container.appendChild(tableEl);
  const rowEl=document.createElement('tr');
  tableEl.appendChild(rowEl);
  this.calculatedCookies.unshift(this.place); 
      for ( let i=0; i< openingHours.length; i++) {
    const dataEl=document.createElement('td');
    rowEl.appendChild(dataEl);
    dataEl.textContent = this.calculatedCookies[i];
  }
 
};

// table header 

function getTableHeader(){
  const container = document.getElementById('Branches'); // section
  console.log(container);
  const tableEl = document.createElement('table'); 
  container.appendChild(tableEl);
  const rowEl=document.createElement('tr');
  tableEl.appendChild(rowEl);
  openingHours.unshift('Time');
    for (let i=0;i< openingHours.length; i++){
  const tableHeaderEl = document.createElement('th');
  rowEl.appendChild(tableHeaderEl);
  tableHeaderEl.textContent=openingHours[i];
  console.log(tableHeaderEl);
   }
  };
  
  getTableHeader(); 

  // table footer

function getTableFooter(){
  const container = document.getElementById('Branches'); // section
  console.log(container);
  const tableEl = document.createElement('table'); 
  container.appendChild(tableEl);
  const footerEl=document.createElement('tfoot');
  tableEl.appendChild(footerEl);
  for (let i=0;i< openingHours.length; i++){
  const fDataEl = document.createElement('td');
  footerEl.appendChild(fDataEl);
  fDataEl.textContent='Total Daily Cookies in all locations';
  console.log(fDataEl);
   }
  };
  getTableFooter();

//FIRST LOCATION
const seattle = new Location(
  'Seattle',
  23,
  65,
  6.3
);
console.log(seattle);
seattle.getCalculatedCookies(); 
seattle.render();

//SECOND LOCATION

const tokyo = new Location(
  'Tokyo',
  3,
  24,
  1.2
);
console.log(tokyo);
tokyo.getCalculatedCookies(); 
tokyo.render();

//THIRD LOCATION
const dubai = new Location(
  'Dubai',
  11,
  38,
  3.7
);
console.log(dubai);
dubai.getCalculatedCookies(); 
dubai.render();

// Fourth location

const paris = new Location(
  'Paris',
  20,
  38,
  2.3,
);
console.log(paris);
paris.getCalculatedCookies(); 
paris.render();

// FIFTH LOCATION

const lima = new Location(
  'Lima',
  20,
  38,
  2.3,
);
console.log(lima);
lima.getCalculatedCookies(); 
lima.render();

// SIXTH LOCATION

const istanbul = new Location(
  'Istanbul',
  10,
  25,
  1.2,
);
console.log(istanbul);
istanbul.getCalculatedCookies(); 
istanbul.render();