function getCryptoPrice() {
  const price = document.getElementById("price");
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `https://api.nobitex.ir/v3/orderbook/USDTIRT`, true);
  xhr.addEventListener("readystatechange", () => {
    if (xhr.status == 200 && xhr.readyState == 4) {
      let crypto = xhr.responseText;
      crypto = JSON.parse(crypto);
      let cryptoPrice = crypto.lastTradePrice / 10;

      if (cryptoPrice !== localStorage.getItem("lastPrise") || 0) {
        if (cryptoPrice > localStorage.getItem("lastPrise")) {
          price.style.color = "green";
        } else if (cryptoPrice < localStorage.getItem("lastPrise")) {
          price.style.color = "red";
        }
        localStorage.setItem("lastPrise", cryptoPrice);
        price.innerHTML = cryptoPrice;
      }
    }
  });
  xhr.send();
}

setInterval(getCryptoPrice, 1000);
