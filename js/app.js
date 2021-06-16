'use strict';

// const storeArray = [Seattle, Tokyo, Dubai, Paris, Lima];

// function render
const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// const Seattle = {
//   storeName: 'Seattle',
//   minCust: 23,
//   maxCust: 65,
//   cookiesPerhour: [],
//   avgCookie: 6.3
// };
// const Tokyo = {
//   storeName: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   cookiesPerhour: [],
//   avgCookie: 1.2
// };
// const Dubai = {
//   storeName: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   cookiesPerhour: [],
//   avgCookie: 3.7
// };
// const Paris = {
//   storeName: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   cookiesPerhour: [],
//   avgCookie: 2.3
// };
// const Lima = {
//   storeName: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   cookiesPerhour: [],
//   avgCookie: 4.6
// };

// function randomCustomer(minCust, maxCust) {
//   return Math.floor(Math.random() * (maxCust - minCust) + minCust);
// }

// function hourlySales(citys) {
//   // let cookiesPerhour = [];
//   for (let i = 0; i< storeHours.length; i++) {
//     let bunchofCookies = randomCustomer(citys.minCust, citys.maxCust) * citys.avgCookie;
//     // Math.floor(bunchofCookies);
//     citys.cookiesPerhour.push(bunchofCookies);
//   }
//   console.log(citys);
// }






// function renderStore(store) {
//   const articleElem = document.createElement('article');
//   storeSalesDivElem.appendChild(articleElem);

//   const h2Elem = document.createElement('h2');
//   h2Elem.textContent = store.storeName;
//   articleElem.appendChild(h2Elem);

//   const ulElem = document.createElement('ul');
//   articleElem.appendChild(ulElem);


// for (let i = 0; i < store.cookiesPerhour.length; i++) {
//   const liElem = document.createElement('li');
//   liElem.textContent = storeHours[i] + ' ' + store.cookiesPerhour[i];
//   ulElem.appendChild(liElem);
// }
// }

// for (let i = 0; i < storeArray.length; i++) {
//   let currentStore = storeArray[i];
//   hourlySales(currentStore);
//   renderStore(currentStore);
// }


// ------------- day 2 work -------------

// constructor
const salesArray = [];
function Cookiesales (locationName, minCust, maxCust, avgCookie) {
  this.locationName = locationName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.cookiesPerhour = [];
  salesArray.push(this);
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
    console.log('test');
    let customers = this.randomCustomer();
    let bunchofCookies = Math.floor(this.avgCookie * customers);
    this.cookiesPerhour.push(bunchofCookies);
  }
  // console.log(this);

};

const storeSalesDivElem = document.getElementById('storeSales');
const tableElem = document.createElement('table');
storeSalesDivElem.appendChild(tableElem);


function createStorehours() {
  const tableHeader = document.createElement('thead');
  tableElem.appendChild(tableHeader);
  const row1 = document.createElement('tr');
  tableHeader.appendChild(row1);
  
  for (let i = 0; i < storeHours.length; i++) {
    const headerCell = document.createElement('th');
    headerCell.textContent = storeHours[i];
    row1.appendChild(headerCell);
  }
}

Cookiesales.prototype.renderCookiesales = function() {
  this.hourlySales();
  const cityRow = document.createElement('tr');
  tableElem.appendChild(cityRow);
  const Cell1cityElem= document.createElement('td');
  Cell1cityElem.textContent = this.locationName;
  cityRow.appendChild(Cell1cityElem);

  for (let i = 0; i < this.cookiesPerhour.length; i++) {
    const tableData = document.createElement('td');
    tableData.textContent = this.cookiesPerhour[i];
    cityRow.appendChild(tableData);
  }
};

// function renderAllCityStores() {
//   for (let i = 0; i < Cookiesales.prototype.storeArray.length; i++) {
//     let currentStore = Cookiesales.prototype.storeArray[i];
//     currentStore.hourlySales();
//     currentStore.renderCookiesales();
//   }
// }
// Cookiesales.prototype dont need

const Seattle = new Cookiesales('Seattle', 23, 65, 6.3);
const Tokyo = new Cookiesales('Tokyo', 3, 24, 1.2);
const Dubai = new Cookiesales('Dubai', 11, 38, 3.7);
const Paris = new Cookiesales('Paris', 20, 38, 2.3);
const Lima = new Cookiesales('Lima', 2, 16, 4.6);
const storeArray = [Seattle, Tokyo, Dubai, Paris, Lima];
// Seattle.hourlySales();
// renderAllCityStores();
createStorehours();
// Seattle.hourlySales();
Seattle.renderCookiesales();
Tokyo.renderCookiesales();
Dubai.renderCookiesales();
Paris.renderCookiesales();
Lima.renderCookiesales();


// fix conditional for loop line 155
// 