import * as React from "react";
import "./CoinSuggestion.js";
function CoinSuggestion(props) {
  const coinClicked = () => {
    props.onClick(props.coin.id);
  };

  return (
    <li key={props.key}>
      <div className="coin" onClick={coinClicked}>
        <div className="coinId">{props.coin.id}</div>
        <div className="coinSymbol">{props.coin.symbol}</div>
        <div className="coinName">{props.coin.name}</div>
      </div>
    </li>
  );
}

export default CoinSuggestion;
