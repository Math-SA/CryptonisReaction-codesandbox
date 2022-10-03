import * as React from "react";
import "./CoinSearch.css";

function CoinSearch() {
  return (
    <div className="coinsearch">
      <form>
        <label for="coinId">Coin</label>
        <input type="text" name="coinId"></input>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default CoinSearch;
