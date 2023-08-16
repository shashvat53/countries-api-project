const container = document.querySelector(".country-container");
// console.log(container);
fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.length);
    data.forEach((country) => {
      console.log(country);

      const countryCard = document.createElement("a");
      countryCard.classList.add("country-card");
      countryCard.href = `#`;
      //   console.log(countryCard);
      const cardHTML = `
            <img src=${country.flags.svg} alt="flag" />
            <div class="card-text">
              <h2>${country.name.common}</h2>
              <p><b>population: </b>${country.population.toLocaleString(
                "en-IN"
              )}</p>
              <p><b>Region: </b>${country.region}</p>
              <p><b>Capital: :</b>${country.region}</p>
      `;
      countryCard.innerHTML = cardHTML;
      container.append(countryCard);
    });
  });
