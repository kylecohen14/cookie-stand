'use strict';

const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const storeSalesDivElem = document.getElementById('storeSales');
const tableElem = document.createElement('table');
const locationFormElem = document.getElementById('addNewLocationForm');
storeSalesDivElem.appendChild(tableElem);

function Cookiesales (locationName, minCust, maxCust, avgCookie) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiesPerhour = [];
  this.salesArray.push(this);
  console.log('this', this);
}
// -------------------------------------
Cookiesales.prototype.salesArray = [];

Cookiesales.prototype.randomCustomer = function() {
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust);
};

Cookiesales.prototype.hourlySales = function () {
  for (let i = 0; i< storeHours.length; i++) {
    // let bunchofCookies = randomCustomer(citys.minCust, citys.maxCust) * citys.avgCookie;
    // Math.floor(bunchofCookies);
    // console.log('test');
    let customers = this.randomCustomer();
    let bunchofCookies = Math.floor(this.avgCookie * customers);
    this.cookiesPerhour.push(bunchofCookies);
  }
};


function createStorehours() {
  const tableHeader = document.createElement('thead');
  tableElem.appendChild(tableHeader);
  const row1 = document.createElement('tr');
  tableHeader.appendChild(row1);
  const locationCell = document.createElement ('th');
  locationCell.textContent = ('Location');
  row1.appendChild(locationCell);
  for (let i = 0; i < storeHours.length; i++) {
    const headerCell = document.createElement('th');
    headerCell.textContent = storeHours[i];
    row1.appendChild(headerCell);
  }
}


Cookiesales.prototype.renderCookiesales = function() {
  let storeTotal = 0
  const cityRow = document.createElement('tr');
  tableElem.appendChild(cityRow);
  const locationCell = document.createElement('th');
  locationCell.textContent = this.locationName;
  cityRow.appendChild(locationCell);

  for (let i = 0; i < storeHours.length; i++) {
    storeTotal += this.cookiesPerhour[i];
    const tableData = document.createElement('td');
    tableData.textContent = this.cookiesPerhour[i];
    cityRow.appendChild(tableData);
  }
  const storeTotalElem = document.createElement('th');
  storeTotalElem.textContent = storeTotal;
  cityRow.appendChild(storeTotalElem);
}


function renderAllCityStores() {
  tableElem.innerHTML = "";
  createStorehours();
  for (let i = 0; i < Cookiesales.prototype.salesArray.length; i++) {
    let currentCity = Cookiesales.prototype.salesArray[i];
    currentCity.randomCustomer();
    currentCity.hourlySales();
    // ??????
    currentCity.renderCookiesales();
  }
  totalCookiesSold();
}


function locationSubmit(event) {
  event.preventDefault();
  // console.log(event.target.name.value, 'event target name');
  let locationName = event.target.locationName.value;
  let minCust = event.target.minCust.value;
  let maxCust = event.target.maxCust.value;
  let avgCookie = event.target.avgCookie.value;

  // push new store into store array?

  console.log(locationName, minCust, maxCust, avgCookie);

  const newLocation = new Cookiesales(locationName, minCust, maxCust, avgCookie);

  console.log(newLocation);
  newLocation.randomCustomer;
  newLocation.hourlySales;
  newLocation.totalCookiesSold;
  // newLocation.renderCookiesales;
  renderAllCityStores();
  // totalCookiesSold();
  event.target.reset();
}


const Seattle = new Cookiesales('Seattle', 23, 65, 6.3);
const Tokyo = new Cookiesales('Tokyo', 3, 24, 1.2);
const Dubai = new Cookiesales('Dubai', 11, 38, 3.7);
const Paris = new Cookiesales('Paris', 20, 38, 2.3);
const Lima = new Cookiesales('Lima', 2, 16, 4.6);



function totalCookiesSold() {
  const tFooter = document.createElement("tfoot");
  tableElem.appendChild(tFooter);
  const citysTotal = document.createElement('th');
  citysTotal.textContent = ('Total Sales');
  tFooter.appendChild(citysTotal);

  let totalCookies = 0

  for (let i = 0; i < storeHours.length; i++) {
    let hourTotal = 0
    for (let j = 0; j < Cookiesales.prototype.salesArray.length; j++) {
      hourTotal += Cookiesales.prototype.salesArray[j].cookiesPerhour[i];
    }
    const hourTotalCell = document.createElement('th');
    hourTotalCell.textContent = hourTotal;
    tFooter.appendChild(hourTotalCell);
    totalCookies += hourTotal;
  }
  const totalCookiesElem = document.createElement('th');
  totalCookiesElem.textContent = totalCookies;
  tFooter.appendChild(totalCookiesElem);
}

const storeArray = [Seattle, Tokyo, Dubai, Paris, Lima];

locationFormElem.addEventListener("submit", locationSubmit);

renderAllCityStores();
// createStorehours();
// totalCookiesSold();

// 149 was building header and footer already, 150 and 151 were building header and footer again.