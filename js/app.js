'use strict';
// first seattle
const seattle = {

  maxCustomers : 23 ,
  minCustomers: 65,
  avgCustomers: 6.3,
  randomCustomers: [0],
  calculatedCookies: [0],
  openingHours : ['6 am','7am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  getRandomCustomers : function (minCustomers,maxCustomers) {
    this.randomCustomers = getRandomNumber (minCustomers,maxCustomers); },
  getCalculatedCookies : function (randomCustomers,avgCustomers){
    this.calculatedCookies = getCookiesPerHour(randomCustomers,avgCustomers);},
  render :function (){
    const container = document.getElementById('Seattle branch'); // section
    console.log(container);
    const articleEl = document.createElement('article'); // article
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = 'Seattle';
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.openingHours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.openingHours[i]} : ${this.calculatedCookies[i]} Cookies`;}
  }
};

console.table(seattle);


function getRandomNumber (minCustomers,maxCustomers){
  for(let i= 0; i< seattle.openingHours.length; i++){
    return seattle.randomCustomers[i]= Math.floor( Math.random() * (maxCustomers - minCustomers +1)+ minCustomers);
    console.log (seattle.randomCustomers[i]);
  }
}

function getCookiesPerHour(randomCustomers,avgCustomers){
  for(let i= 0; i< seattle.openingHours.length; i++){
    return seattle.calculatedCookies[i]=seattle.randomCustomers[i]*seattle.avgCustomers;
    console.log (seattle.calculatedCustomers[i]); 
  }
}

console.log(getRandomNumber (seattle.minCustomers,seattle.maxCustomers));
console.log(getCookiesPerHour(seattle.randomCustomers,seattle.avgCustomers));
seattle.render();


// second location - Tokyo
const tokyo = {

  maxCustomers : 3 ,
  minCustomers: 24,
  avgCustomers: 1.2,
  randomCustomers: [0],
  calculatedCookies: [0],
  openingHours : ['6 am','7am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  getRandomCustomers : function (minCustomers,maxCustomers) {
    this.randomCustomers = getRandomNumberT (minCustomers,maxCustomers); },
  getCalculatedCookies : function (randomCustomers,avgCustomers){
    this.calculatedCookies = getCookiesPerHourT(randomCustomers,avgCustomers);},
  render :function (){
    const container = document.getElementById('Tokyo branch'); // section
    console.log(container);
    const articleEl = document.createElement('article'); // article
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = 'Tokyo';
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.openingHours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.openingHours[i]} : ${this.calculatedCookies[i]} Cookies`;}
  }
};

console.table(tokyo);

function getRandomNumberT (minCustomers,maxCustomers){
  for(let i= 0; i< tokyo.openingHours.length; i++){
    return tokyo.randomCustomers[i]= Math.floor( Math.random() * (maxCustomers - minCustomers +1)+ minCustomers);
    console.log (tokyo.randomCustomers[i]);
  }
}

function getCookiesPerHourT(randomCustomers,avgCustomers){
  for(let i= 0; i< tokyo.openingHours.length; i++){
    return tokyo.calculatedCookies[i]=tokyo.randomCustomers[i]*tokyo.avgCustomers;
    console.log (tokyo.calculatedCustomers[i]); 
  }
}

console.log(getRandomNumberT (tokyo.minCustomers,tokyo.maxCustomers));
console.log(getCookiesPerHourT(tokyo.randomCustomers,tokyo.avgCustomers));
tokyo.render();

// THIRD location - Dubai
const dubai= {

  maxCustomers : 11 ,
  minCustomers: 38,
  avgCustomers: 3.7,
  randomCustomers: [0],
  calculatedCookies: [0],
  openingHours : ['6 am','7am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  getRandomCustomers : function (minCustomers,maxCustomers) {
    this.randomCustomers = getRandomNumberD (minCustomers,maxCustomers); },
  getCalculatedCookies : function (randomCustomers,avgCustomers){
    this.calculatedCookies = getCookiesPerHourD(randomCustomers,avgCustomers);},
  render :function (){
    const container = document.getElementById('Dubai branch'); // section
    console.log(container);
    const articleEl = document.createElement('article'); // article
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = 'Dubai';
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.openingHours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.openingHours[i]} : ${this.calculatedCookies[i]} Cookies`;}
  }
};

console.table(dubai);

function getRandomNumberD (minCustomers,maxCustomers){
  for(let i= 0; i< dubai.openingHours.length; i++){
    return dubai.randomCustomers[i]= Math.floor( Math.random() * (maxCustomers - minCustomers +1)+ minCustomers);
    console.log (dubai.randomCustomers[i]);
  }
}

function getCookiesPerHourD(randomCustomers,avgCustomers){
  for(let i= 0; i< dubai.openingHours.length; i++){
    return dubai.calculatedCookies[i]=dubai.randomCustomers[i]*dubai.avgCustomers;
    console.log (dubai.calculatedCustomers[i]); 
  }
}

console.log(getRandomNumberD (dubai.minCustomers,dubai.maxCustomers));
console.log(getCookiesPerHourD(dubai.randomCustomers,dubai.avgCustomers));
dubai.render();

// fourth location Paris

const paris= {

  maxCustomers : 20 ,
  minCustomers: 38,
  avgCustomers: 2.3,
  randomCustomers: [0],
  calculatedCookies: [0],
  openingHours : ['6 am','7am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  getRandomCustomers : function (minCustomers,maxCustomers) {
    this.randomCustomers = getRandomNumberP (minCustomers,maxCustomers); },
  getCalculatedCookies : function (randomCustomers,avgCustomers){
    this.calculatedCookies = getCookiesPerHourP(randomCustomers,avgCustomers);},
  render :function (){
    const container = document.getElementById('Paris branch'); // section
    console.log(container);
    const articleEl = document.createElement('article'); // article
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = 'Paris';
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.openingHours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.openingHours[i]} : ${this.calculatedCookies[i]} Cookies`;}
  }
};

console.table(paris);

function getRandomNumberP (minCustomers,maxCustomers){
  for(let i= 0; i< paris.openingHours.length; i++){
    return paris.randomCustomers[i]= Math.floor( Math.random() * (maxCustomers - minCustomers +1)+ minCustomers);
    console.log (paris.randomCustomers[i]);
  }
}

function getCookiesPerHourP(randomCustomers,avgCustomers){
  for(let i= 0; i< paris.openingHours.length; i++){
    return paris.calculatedCookies[i]=paris.randomCustomers[i]*paris.avgCustomers;
    console.log (paris.calculatedCustomers[i]); 
  }
}

console.log(getRandomNumberD (paris.minCustomers,paris.maxCustomers));
console.log(getCookiesPerHourD(paris.randomCustomers,paris.avgCustomers));
paris.render();


// fifth location Lima

const lima= {

  maxCustomers : 2 ,
  minCustomers: 16,
  avgCustomers: 4.6,
  randomCustomers: [0],
  calculatedCookies: [0],
  openingHours : ['6 am','7am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm'],
  getRandomCustomers : function (minCustomers,maxCustomers) {
    this.randomCustomers = getRandomNumberL (minCustomers,maxCustomers); },
  getCalculatedCookies : function (randomCustomers,avgCustomers){
    this.calculatedCookies = getCookiesPerHourL(randomCustomers,avgCustomers);},
  render :function (){
    const container = document.getElementById('Lima branch'); // section
    console.log(container);
    const articleEl = document.createElement('article'); // article
    container.appendChild(articleEl);
    const h2El = document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent = 'Lima';
    const ulEl = document.createElement('ul');
    articleEl.appendChild(ulEl);
    for (let i = 0; i < this.openingHours.length; i++) {
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.openingHours[i]} : ${this.calculatedCookies[i]} Cookies`;}
  }
};

console.table(lima);

function getRandomNumberL (minCustomers,maxCustomers){
  for(let i= 0; i< lima.openingHours.length; i++){
    return lima.randomCustomers[i]= Math.floor( Math.random() * (maxCustomers - minCustomers +1)+ minCustomers);
    console.log (lima.randomCustomers[i]);
  }
}

function getCookiesPerHourL(randomCustomers,avgCustomers){
  for(let i= 0; i< lima.openingHours.length; i++){
    return lima.calculatedCookies[i]=lima.randomCustomers[i]*lima.avgCustomers;
    console.log (lima.calculatedCustomers[i]); 
  }
}

console.log(getRandomNumberD (lima.minCustomers,lima.maxCustomers));
console.log(getCookiesPerHourD(lima.randomCustomers,lima.avgCustomers));
lima.render();