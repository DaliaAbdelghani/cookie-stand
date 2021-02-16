'use strict';

let openingHours = ['6 am','7am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];
let locationsList = [ ];


function getRandomNumber (minCustomers,maxCustomers){
  return Math.floor( Math.random() * (maxCustomers - minCustomers +1)+ minCustomers);
}

// first seattle
const seattle = {
  location:'Seattle',
  maxCustomers : 23 ,
  minCustomers: 65,
  avgCustomers: 6.3,
  dailyTotalCookies: 0,
  calculatedCookies: [ ],
  getCalculatedCookies : function (){
    for (let i=0; i< openingHours.length; i++) {
      let cookiesPerHour = Math.round(getRandomNumber(this.minCustomers,this.maxCustomers)*this.avgCustomers);
      this.dailyTotalCookies+=cookiesPerHour;
      this.calculatedCookies.push(cookiesPerHour);
      console.log(this.calculatedCookies);}
  },
  render :function (){
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


// second location - Tokyo
const tokyo = {
  location:'tokyo',
  maxCustomers : 3 ,
  minCustomers: 24,
  avgCustomers: 1.2,
  dailyTotalCookies: 0,
  calculatedCookies: [ ],
  getCalculatedCookies : function (){
    for (let i=0; i< openingHours.length; i++) {
      let cookiesPerHour = Math.round(getRandomNumber(this.minCustomers,this.maxCustomers)*this.avgCustomers);
      this.dailyTotalCookies+=cookiesPerHour;
      this.calculatedCookies.push(cookiesPerHour);
      console.log(this.calculatedCookies);}
  },
  render :function (){
    this.getCalculatedCookies();
    const container = document.getElementById('Tokyo branch'); // section
    console.log(container);
    const articleEl = document.createElement('article'); // article
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = 'Tokyo';
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < openingHours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${openingHours[i]} : ${this.calculatedCookies[i]} Cookies`;}
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = 'Total Cookies :'+this.dailyTotalCookies+'.';
  },
};

console.table(tokyo);
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

// THIRD location - Dubai
const dubai = {
  location:'dubai',
  maxCustomers : 11 ,
  minCustomers: 38,
  avgCustomers: 3.7,
  dailyTotalCookies: 0,
  calculatedCookies: [ ],
  getCalculatedCookies : function (){
    for (let i=0; i< openingHours.length; i++) {
      let cookiesPerHour = Math.round(getRandomNumber(this.minCustomers,this.maxCustomers)*this.avgCustomers);
      this.dailyTotalCookies+=cookiesPerHour;
      this.calculatedCookies.push(cookiesPerHour);
      console.log(this.calculatedCookies);}
  },
  render :function (){
    this.getCalculatedCookies();
    const container = document.getElementById('Dubai branch'); // section
    console.log(container);
    const articleEl = document.createElement('article'); // article
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = 'Dubai';
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < openingHours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${openingHours[i]} : ${this.calculatedCookies[i]} Cookies`;}
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = 'Total Cookies :'+this.dailyTotalCookies+'.';
  },
};


// fourth location Paris

const paris = {
  location:'paris',
  maxCustomers : 20 ,
  minCustomers: 38,
  avgCustomers: 2.3,
  dailyTotalCookies: 0,
  calculatedCookies: [ ],
  getCalculatedCookies : function (){
    for (let i=0; i< openingHours.length; i++) {
      let cookiesPerHour = Math.round(getRandomNumber(this.minCustomers,this.maxCustomers)*this.avgCustomers);
      this.dailyTotalCookies+=cookiesPerHour;
      this.calculatedCookies.push(cookiesPerHour);
      console.log(this.calculatedCookies);}
  },
  render :function (){
    this.getCalculatedCookies();
    const container = document.getElementById('Paris branch'); // section
    console.log(container);
    const articleEl = document.createElement('article'); // article
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = 'Paris';
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < openingHours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${openingHours[i]} : ${this.calculatedCookies[i]} Cookies`;}
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = 'Total Cookies :'+this.dailyTotalCookies+'.';
  },
};


  // table footer

// fifth location Lima

const lima = {
  location:'lima',
  maxCustomers : 3 ,
  minCustomers: 24,
  avgCustomers: 1.2,
  dailyTotalCookies: 0,
  calculatedCookies: [ ],
  getCalculatedCookies : function (){
    for (let i=0; i< openingHours.length; i++) {
      let cookiesPerHour = Math.round(getRandomNumber(this.minCustomers,this.maxCustomers)*this.avgCustomers);
      this.dailyTotalCookies+=cookiesPerHour;
      this.calculatedCookies.push(cookiesPerHour);
      console.log(this.calculatedCookies);}
  },
  render :function (){
    this.getCalculatedCookies();
    const container = document.getElementById('Lima branch'); // section
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