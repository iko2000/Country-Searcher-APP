"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const searchResult = document.querySelector("#searcher");
const button = document.querySelector("#search-btn");
const currency = document.querySelector("#currency");
const population = document.querySelector("#population");
const region = document.querySelector("#region");
const language = document.querySelector("#language");
const countryName = document.querySelector("#country-name");
const flagImage = document.querySelector("#flag-image");
const capital = document.querySelector("#capital");

const getCountrydata = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(
      (response) => response.json(),
      (err) => alert(err)
    )
    .then(function (data) {
      console.log(data);
      renderCountry(data[0]);
    })
    .catch((errp) => alert("Contry with that name does not exist"));
};
const renderCountry = function (data) {
  flagImage.src = `${data.flags.svg}`;
  countryName.textContent = ` ${data.name.common}`;

  currency.textContent = `💰 ${Object.keys(data.currencies)}`;
  language.textContent = `LANG: ${Object.values(data.languages)}`;
  population.textContent = 
  `👫 ${+(data.population / 1000000).toFixed(
    4
  )} M people`;
  region.textContent = `Region: ${data.region}`;
  capital.textContent = `Capital: ${data.capital}`;

  countriesContainer.style.opacity = 1;
};

button.addEventListener("click", function () {
  const result = searchResult.value;

  getCountrydata(result);
});
