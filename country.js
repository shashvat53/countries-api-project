const countryName = new URLSearchParams(window.location.search).get("name");
// console.log(countryName);
const flag = document.querySelector(".country-container img");
const countryHeading = document.querySelector(".text-container h1");
const nativeName = document.querySelector(".nativeName");
const population = document.querySelector(".population");
const region = document.querySelector(".region");
const subRegion = document.querySelector(".subRegion");
const capital = document.querySelector(".capital");
const topLevelDomain = document.querySelector(".topLevelDomain");
const currencies = document.querySelector(".currencies");
const languages = document.querySelector(".languages");

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((country) => {
    console.log(country);
    flag.src = country[0].flags.svg;
    countryHeading.innerText = country[0].name.common;
    if (country[0].name.nativeName) {
      nativeName.innerText = Object.values(
        country[0].name.nativeName
      )[0].common;
    }
    population.innerText = country[0].population.toLocaleString("en-IN");
    region.innerText = country[0].region;
    subRegion.innerText = country[0].subregion;

    if (country[0].capital) {
      capital.innerText = country[0].capital.join(", ");
    }
    if (country[0].tld) {
      topLevelDomain.innerText = country[0].tld.join(", ");
    }
    if (country[0].currencies) {
      currencies.innerText = Object.values(country[0].currencies)
        .map((currency) => currency.name)
        .join(", ");
    }
    if (country[0].languages) {
      languages.innerText = Object.values(country[0].languages).join(", ");
    }
  });
