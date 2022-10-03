import * as React from "react";
import "./CoinSearch.css";
import CoinInfo from "./CoinInfo";
import SuggestedCoinsList from "./SuggestedCoinsList";
import Axios from "axios";

function CoinSearch() {
  const [coinId, setCoinId] = React.useState("");
  const [suggestedCoins, setSuggestedCoins] = React.useState([]);
  const [coin, setCoin] = React.useState(null);

  const coinSearchURL = "https://devplay-cryptonis.onrender.com/price/";
  const coinFilterURL = "https://devplay-cryptonis.onrender.com/coins/";

  const coinIdChanged = (evt) => {
    setCoinId(evt.target.value);
    filterCoins(evt.target.value);
  };

  const filterCoins = (part) => {
    if (part !== "") {
      Axios.get(coinFilterURL + part)
        .then((res) => {
          if (res.status === 200) {
            console.log(`filter coins successful: ${res.data}`);
            setSuggestedCoins(res.data);
          }
        })
        .catch(() => {
          setSuggestedCoins([]);
        });
    } else {
      setSuggestedCoins([]);
    }
  };

  const searchClicked = (evt) => {
    evt.preventDefault();
    console.log(`searching for ${coinId}`);
    Axios.get(coinSearchURL + coinId)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setCoin(res.data);
        }
      })
      .catch(() => {
        console.log(`unable to find ${coinId}`);
      });
  };

  const coinClicked = (coin) => {
    console.log(`searching for ${coin}`);
    Axios.get(coinSearchURL + coin)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data);
          setCoin(res.data);
        }
      })
      .catch(() => {
        console.log(`unable to find ${coin}`);
      });
    setCoinId("");
    filterCoins("");
  };

  return (
    <div className="coinsearch">
      <form>
        <div>
          <label>Coin</label>
          <input
            type="text"
            name="coinId"
            onChange={coinIdChanged}
            value={coinId}
          ></input>
          <SuggestedCoinsList
            coins={suggestedCoins}
            part={coinId}
            onClick={coinClicked}
          ></SuggestedCoinsList>
        </div>

        <button type="submit" onClick={searchClicked}>
          Search
        </button>
      </form>
      <div>
        <CoinInfo coinData={coin}></CoinInfo>
      </div>
    </div>
  );
}

export default CoinSearch;
