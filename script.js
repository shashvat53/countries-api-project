const container = document.querySelector(".country-container");
// console.log(container);
const filterByRegion = document.querySelector(".filter-by-region");
// console.log(filterByRegion);
const searchInput = document.querySelector(".search-container input");
let allCountriesData;
const themeChanger = document.querySelector(".theme-changer");
const darkMode = document.querySelector(".dark-mode");
const lightMode = document.querySelector(".light-mode");
console.log(themeChanger.innerText);

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data);
    allCountriesData = data;
  });

filterByRegion.addEventListener("change", (e) => {
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((res) => res.json())
    .then(renderCountries);
});

function renderCountries(data) {
  container.innerHTML = "";
  data.forEach((country) => {
    // console.log(country);

    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    countryCard.href = `/country.html?name=${country.name.common}`;
    //   console.log(countryCard);
    const cardHTML = `
          <img src=${country.flags.svg} alt="flag" />
          <div class="card-text">
            <h2>${country.name.common}</h2>
            <p><b>population: </b>${country.population.toLocaleString(
              "en-IN"
            )}</p>
            <p><b>Region: </b>${country.region}</p>
            <p><b>Capital: </b>${country.capital}</p>
    `;
    countryCard.innerHTML = cardHTML;
    container.append(countryCard);
  });
}

searchInput.addEventListener("input", (e) => {
  // console.log(e.target.value);
  // console.log(allCountriesData);
  const filtered = allCountriesData.filter((country) =>
    country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
  );
  // console.log(filtered);
  renderCountries(filtered);
});

themeChanger.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (lightMode.style.display === "none") {
    darkMode.style.display = "none";
    lightMode.style.display = "block";
  } else {
    lightMode.style.display = "none";
    darkMode.style.display = "block";
  }
});
