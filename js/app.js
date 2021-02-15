'use strict';

let openingHours = ['6 am','7am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'];

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
      let cookiesPerHour = getRandomNumber(this.minCustomers,this.maxCustomers)*this.avgCustomers;
      this.dailyTotalCookies+=cookiesPerHour;
      this.calculatedCookies.push(cookiesPerHour);
      console.log(this.calculatedCookies);}
  },
  render :function (){
    this.getCalculatedCookies();
    const container = document.getElementById('Seattle branch'); // section
    console.log(container);
    const articleEl = document.createElement('article'); // article
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = 'Seattle';
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

console.table(seattle);
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
      let cookiesPerHour = getRandomNumber(this.minCustomers,this.maxCustomers)*this.avgCustomers;
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
      let cookiesPerHour = getRandomNumber(this.minCustomers,this.maxCustomers)*this.avgCustomers;
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

console.table(dubai);
dubai.render();

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
      let cookiesPerHour = getRandomNumber(this.minCustomers,this.maxCustomers)*this.avgCustomers;
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

console.table(paris);
paris.render();


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
      let cookiesPerHour = getRandomNumber(this.minCustomers,this.maxCustomers)*this.avgCustomers;
      this.dailyTotalCookies+=cookiesPerHour;
      this.calculatedCookies.push(cookiesPerHour);
      console.log(this.calculatedCookies);}
  },
  render :function (){
    this.getCalculatedCookies();
    const container = document.getElementById('Lima branch'); // section
    console.log(container);
    const articleEl = document.createElement('article'); // article
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = 'Lima';
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

console.table(lima);
lima.render();