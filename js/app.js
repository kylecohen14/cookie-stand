'use strict';

// const storeArray = [Seattle, Tokyo, Dubai, Paris, Lima];

// function render
const storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

const Seattle = {
  storeName: 'Seattle',
  minCust: 23,
  maxCust: 65,
  cookiesPerhour: [],
  avgCookie: 6.3
};
const Tokyo = {
  storeName: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  cookiesPerhour: [],
  avgCookie: 1.2
};
const Dubai = {
  storeName: 'Dubai',
  minCust: 11,
  maxCust: 38,
  cookiesPerhour: [],
  avgCookie: 3.7
};
const Paris = {
  storeName: 'Paris',
  minCust: 20,
  maxCust: 38,
  cookiesPerhour: [],
  avgCookie: 2.3
};
const Lima = {
  storeName: 'Lima',
  minCust: 2,
  maxCust: 16,
  cookiesPerhour: [],
  avgCookie: 4.6
};

function randomCustomer(minCust, maxCust) {
  return Math.floor(Math.random() * (maxCust - minCust) + minCust);
}
// function cookieNumber(avgCookie, customers) {
//   return Math.floor(avgCookie * customers);
// }
function hourlySales(citys) {
  // let cookiesPerhour = [];
  for (let i = 0; i< storeHours.length; i++) {
    let bunchofCookies = randomCustomer(citys.minCust, citys.maxCust) * citys.avgCookie;
    // Math.floor(bunchofCookies);
    citys.cookiesPerhour.push(bunchofCookies);
  }
  console.log(citys);
}
// hourlySales(Seattle);
// hourlySales(Tokyo);
// hourlySales(Dubai);
// hourlySales(Paris);
// hourlySales(Lima);
// console.log(Seattle);
// console.log(Tokyo);
// console.log(Dubai);
// console.log(Paris);
// console.log(Lima);

const storeArray = [Seattle, Tokyo, Dubai, Paris, Lima];

const storeSalesDivElem = document.getElementById('storeSales');
function renderStore(store) {
  const articleElem = document.createElement('article');
  storeSalesDivElem.appendChild(articleElem);

  const h2Elem = document.createElement('h2');
  h2Elem.textContent = store.storeName;
  articleElem.appendChild(h2Elem);

  const ulElem = document.createElement('ul');
  articleElem.appendChild(ulElem);

  // for (let i = 0; i < storeHours.length; i++) {
  //   const liElem = document.createElement('li');
  //   liElem.textContent = storeHours[i];
  //   ulElem.appendChild(liElem);
  // }
  for (let i = 0; i < store.cookiesPerhour.length; i++) {
    const liElem = document.createElement('li');
    liElem.textContent = storeHours[i] + ' ' + store.cookiesPerhour[i];
    ulElem.appendChild(liElem);
  }
}

for (let i = 0; i < storeArray.length; i++) {
  let currentStore = storeArray[i];
  hourlySales(currentStore);
  renderStore(currentStore);
}



// ****create global array for hours
// 

// create a function to take in 2 numbers (min and max)
// ******that generates a random number between min and max
// 
// each object will need a list (array), the random number generator will be used to build list of random numbers for every hour on every store (one store today)
// once that list is done, go through creating DOM elements, giving it values, and appending it to the DOM
// grab something to append to (id)
// create new element
// give that new element some content (values)
// append that element to the thing grabbed

// give LI values the random number (#of customer) * by avg cookie sale at that store, each LI is the hour of the day/}