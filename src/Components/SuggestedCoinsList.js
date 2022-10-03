import * as React from "react";
import "./SuggestedCoinsList.css";
import CoinSuggestion from "./CoinSuggestion";

function SuggestedCoinsList(props) {
  const onCoinClick = (id) => {
    console.log(`clicked ${id}`);
    props.onClick(id);
  };

  if (!props.coins || props.coins.length == 0) {
    return "";
  }

  console.log(props.part);
  let perfectMatch = Array.from(props.coins).filter(
    (coin) =>
      coin.id == props.part ||
      coin.name == props.part ||
      coin.symbol == props.part
  );
  console.log(`found ${perfectMatch.length} matches`);
  perfectMatch = perfectMatch.map((coin) => (
    <CoinSuggestion
      key={coin.id}
      coin={coin}
      onClick={onCoinClick}
    ></CoinSuggestion>
  ));

  return (
    <div className="list">
      <div>
        Perfect Match
        <ul style={{ "list-style-type": "none" }}>{perfectMatch}</ul>
      </div>
      Coins{" "}
      <ul style={{ "list-style-type": "none" }}>
        {props.coins.slice(0, 20).map((coin) => {
          return (
            <CoinSuggestion
              key={coin.id}
              coin={coin}
              onClick={onCoinClick}
            ></CoinSuggestion>
          );
        })}
        {props.coins.length > 20 && (
          <li>
            <div className="coin">
              {" "}
              {props.coins.length - 20} more available...
            </div>
          </li>
        )}
      </ul>
    </div>
  );
}

export default SuggestedCoinsList;
