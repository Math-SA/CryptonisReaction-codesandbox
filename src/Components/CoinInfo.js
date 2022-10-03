import * as React from "react";

function CoinInfo(props) {
  let content = <div>Search for a coin to start tracking!</div>;
  if (props.coinData) {
    let prices = [];
    for (const [key, value] of Object.entries(props.coinData.current_price)) {
      prices.push(
        <li key={key}>
          {key}: {value}
        </li>
      );
    }
    content = (
      <div className="coin">
        <div className="coinId">{props.coinData.coin}</div>
        <ul>{prices}</ul>
      </div>
    );
  }
  return content;
}
export default CoinInfo;
