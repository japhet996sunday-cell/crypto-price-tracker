let loadBtn = document.getElementById("loadBtn");
let cryptoContainer = document.getElementById("cryptoContainer");

async function loadCrypto() {

  cryptoContainer.innerHTML = "Loading prices...";

  try {

    let response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    );

    let data = await response.json();

    cryptoContainer.innerHTML = "";

    data.slice(0, 10).forEach(function(coin) {

      let card = document.createElement("div");

      card.classList.add("card");

      card.innerHTML = `
        <img src="${coin.image}" />

        <h2>${coin.name}</h2>

        <p class="price">$${coin.current_price}</p>

        <p>Market Cap Rank: ${coin.market_cap_rank}</p>
      `;

      cryptoContainer.appendChild(card);

    });

  } catch (error) {

    cryptoContainer.innerHTML =
      "❌ Failed to load crypto data";

  }
}

loadBtn.addEventListener("click", loadCrypto);
