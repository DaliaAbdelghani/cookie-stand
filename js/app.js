'use strict';

let openingHours = ['6 am', '7am', '8 am', '9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm'];
let locationsList = [];


function getRandomNumber(minCustomers, maxCustomers) {
  return Math.floor(Math.random() * (maxCustomers - minCustomers + 1) + minCustomers);
}

function CookieBooth(place, minCustomers, maxCustomers, avgCustomers) {

  this.place = place;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCustomers = avgCustomers;
  this.calculatedCookies = [];
  this.dailyTotalCookies = 0;
}

CookieBooth.prototype.getCalculatedCookies = function () {
  for (let i = 0; i < openingHours.length; i++) {
    let cookiesPerHour = Math.round(getRandomNumber(this.minCustomers, this.maxCustomers) * this.avgCustomers);
    this.dailyTotalCookies += cookiesPerHour;
    this.calculatedCookies.push(cookiesPerHour);
  }
};


//FIRST CookieBooth
createLocations();
drawTable();

function createLocations() {
  const seattle = new CookieBooth(
    'Seattle',
    23,
    65,
    6.3
  );
  locationsList.push(seattle);
  seattle.getCalculatedCookies();

  //SECOND CookieBooth
  const tokyo = new CookieBooth(
    'Tokyo',
    3,
    24,
    1.2
  );

  locationsList.push(tokyo);
  tokyo.getCalculatedCookies();

  //THIRD CookieBooth
  const dubai = new CookieBooth(
    'Dubai',
    11,
    38,
    3.7
  );

  locationsList.push(dubai);
  dubai.getCalculatedCookies();

  // Fourth CookieBooth
  const paris = new CookieBooth(
    'Paris',
    20,
    38,
    2.3
  );

  locationsList.push(paris);
  paris.getCalculatedCookies();

  // FIFTH CookieBooth
  const lima = new CookieBooth(
    'Lima',
    20,
    38,
    2.3
  );

  locationsList.push(lima);
  lima.getCalculatedCookies();

  // SIXTH CookieBooth
  const istanbul = new CookieBooth(
    'Istanbul',
    10,
    25,
    1.2
  );

  locationsList.push(istanbul);
  istanbul.getCalculatedCookies();

  // form inputs
  const form = document.getElementById('FORM');
  form.addEventListener('submit',addBooth);
}
function addBooth (event) {
  event.preventDefault();
  const place = event.target.place.value;
  const minCustomers = parseInt(event.target.minCustomers.value);
  const maxCustomers = parseInt(event.target.maxCustomers.value);
  const avgCustomers = parseInt(event.target.avgCustomers.value);

  const newLocation = new CookieBooth(place, minCustomers, maxCustomers, avgCustomers);
  locationsList.push(newLocation);
  newLocation.getCalculatedCookies();
  clearSection();
  drawTable();
  event.target.reset();
}

function calculateTotal() {
  let summations = [];
  if (locationsList && locationsList.length > 0) {
    for (let i = 0; i < locationsList[0].calculatedCookies.length; i++) {
      summations[i] = 0;
    }
    for (let locIdx in locationsList) {
      let loc = locationsList[locIdx];
      for (let i = 0; i < loc.calculatedCookies.length; i++) {
        summations[i] += loc.calculatedCookies[i];
      }
    }
  }
  return summations;
}

function grandTotal() {
  let sum = 0;
  for (let i = 0; i < locationsList.length; i++) {
    sum += locationsList[i].dailyTotalCookies;
  }
  return sum;
}

// table header
function getTableHeader(tableEl) {
  const rowEl = document.createElement('tr');
  tableEl.appendChild(rowEl);
  const timeTh = document.createElement('th');
  rowEl.appendChild(timeTh);
  timeTh.textContent = 'Time';
  for (let i = 0; i < openingHours.length; i++) {
    const tableHeaderEl = document.createElement('th');
    rowEl.appendChild(tableHeaderEl);
    tableHeaderEl.textContent = openingHours[i];
  }
  const dataLastEl = document.createElement('td');
  rowEl.appendChild(dataLastEl);
  dataLastEl.textContent = 'Total Daily Cookies';
}

// table footer

function getTableFooter(tableEl) {
  const tableFooterEl = document.createElement('tfoot');
  tableEl.appendChild(tableFooterEl);
  const rowFooterEl = document.createElement('tr');
  let summations = calculateTotal();
  tableFooterEl.appendChild(rowFooterEl);
  const fDataTitleEl = document.createElement('td');
  rowFooterEl.appendChild(fDataTitleEl);
  fDataTitleEl.textContent = 'Total';
  for (let i = 0; i < summations.length; i++) {
    const fDataEl = document.createElement('td');
    rowFooterEl.appendChild(fDataEl);
    fDataEl.textContent = summations[i];
  }
  const footerTotalEl = document.createElement('td');
  rowFooterEl.appendChild(footerTotalEl);
  footerTotalEl.textContent = grandTotal();
}



function drawTable() {
  const container = document.getElementById('Branches'); // section
  const tableEl = document.createElement('table');
  container.appendChild(tableEl);
  getTableHeader(tableEl);
  const tableBodyEl = createTableBody(tableEl);
  prepareLocationsRows(tableBodyEl);
  getTableFooter(tableEl);

}
function createTableBody(tableEl) {
  const tableBodyEl = document.createElement('tBody');
  tableEl.appendChild(tableBodyEl);
  tableBodyEl.id = 'salesTable';
  return tableBodyEl;
}

function clearSection() {
  const container = document.getElementById('Branches'); // section
  container.innerHTML = '';

}

function prepareLocationsRows(tableBodyEl) {
  locationsList.forEach((cookieBooth) => {
    drawRow(cookieBooth, tableBodyEl);
  });
}

function drawRow(cookieBooth, tableBodyEl) {
  const rowEl = document.createElement('tr');
  tableBodyEl.appendChild(rowEl);
  const locs = document.createElement('td');
  rowEl.appendChild(locs);
  locs.textContent = cookieBooth.place;
  for (let i = 0; i < openingHours.length; i++) {
    const dataEl = document.createElement('td');
    rowEl.appendChild(dataEl);
    dataEl.textContent = cookieBooth.calculatedCookies[i];
  }
  const dataLastEl = document.createElement('td');
  rowEl.appendChild(dataLastEl);
  dataLastEl.textContent = cookieBooth.dailyTotalCookies;
};
