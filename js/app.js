'use strict';

let openingHours = ['6 am','7am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];
let locationsList = [ ];


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
    console.log(this.calculatedCookies);
        
    }   
};
  Location.prototype.render = function () {
    this.getCalculatedCookies();
  const container = document.getElementById('Branches'); // section
  console.log(container);
  const tableEl = document.createElement('table'); 
  container.appendChild(tableEl);
  const tableBodyEl =document.createElement('tBody');
  tableEl.appendChild(tableBodyEl);
  const rowEl=document.createElement('tr');
  tableBodyEl.appendChild(rowEl);

  const locs=document.createElement('td');
  rowEl.appendChild(locs);
  locs.textContent =this.place;
      for ( let i=0; i< openingHours.length; i++) {
    const dataEl=document.createElement('td');
    rowEl.appendChild(dataEl);
    dataEl.textContent = this.calculatedCookies[i];
  }
  const dataLastEl=document.createElement('td');
  rowEl.appendChild(dataLastEl); 
  dataLastEl.textContent=this.dailyTotalCookies; 
};

// table header 

function getTableHeader(){
  const container = document.getElementById('Branches'); // section
  console.log(container);
  const tableEl = document.createElement('table'); 
  container.appendChild(tableEl);
  const rowEl=document.createElement('tr');
  tableEl.appendChild(rowEl);
  const timeTh = document.createElement('th');
  rowEl.appendChild(timeTh);
  timeTh.textContent ="Time";
    for (let i=0;i< openingHours.length; i++){
  const tableHeaderEl = document.createElement('th');
  rowEl.appendChild(tableHeaderEl);
  tableHeaderEl.textContent=openingHours[i];
  console.log(tableHeaderEl);
   }
   const dataLastEl=document.createElement('td');
   rowEl.appendChild(dataLastEl); 
   dataLastEl.textContent='Total Daily Cookies'; 
  };
  
  getTableHeader(); 

 
//FIRST LOCATION
const seattle = new Location(
  'Seattle',
  23,
  65,
  6.3
);
console.log(seattle);
 
locationsList.push(seattle);
seattle.render();

//SECOND LOCATION

const tokyo = new Location(
  'Tokyo',
  3,
  24,
  1.2
);
console.log(tokyo);
 
locationsList.push(tokyo);
tokyo.render();

//THIRD LOCATION
const dubai = new Location(
  'Dubai',
  11,
  38,
  3.7
);
console.log(dubai);
 
locationsList.push(dubai);
dubai.render();

// Fourth location

const paris = new Location(
  'Paris',
  20,
  38,
  2.3,
);
console.log(paris);
 

locationsList.push(paris);
paris.render();

// FIFTH LOCATION

const lima = new Location(
  'Lima',
  20,
  38,
  2.3,
);
console.log(lima);
 locationsList.push(lima); 
lima.render();

// SIXTH LOCATION

const istanbul = new Location(
  'Istanbul',
  10,
  25,
  1.2,
);
console.log(istanbul);
 
locationsList.push(istanbul); 
istanbul.render();

function calculateTotal(){
 let summations = [];
 if(locationsList && locationsList.length >0){
 for ( let i=0; i<locationsList[0].calculatedCookies.length; i++){
    summations[i]=0;
 }
 for (let locIdx in locationsList){
   let loc = locationsList[locIdx];
   for ( let i=0; i<loc.calculatedCookies.length; i++){
     summations[i] += loc.calculatedCookies[i];
   }
 }
}
 return summations;
}


function grandTotal (){
  let sum = 0;
  for (let i=0; i< locationsList.length;i++ ){
    sum += locationsList[i].dailyTotalCookies;
    }
    return sum;
}


  // table footer

  function getTableFooter(){
    const container = document.getElementById('Branches'); // section
    console.log(container);
    const tableEl = document.createElement('table'); 
    container.appendChild(tableEl);
    const tableFooterEl =document.createElement('tfoot');
    tableEl.appendChild(tableFooterEl);
    const rowFooterEl=document.createElement('tr');
    let summations = calculateTotal(); 
    tableFooterEl.appendChild(rowFooterEl);
    const fDataTitleEl = document.createElement('td');
    rowFooterEl.appendChild(fDataTitleEl);
    fDataTitleEl.textContent='Total';
     for (let i=0;i< summations.length; i++){
    const fDataEl = document.createElement('td');
    rowFooterEl.appendChild(fDataEl);
    fDataEl.textContent= summations[i];
    console.log(fDataEl);
     }
     const footerTotalEl = document.createElement('td');
     rowFooterEl.appendChild(footerTotalEl);
     footerTotalEl.textContent= grandTotal();
    };
  
    getTableFooter();