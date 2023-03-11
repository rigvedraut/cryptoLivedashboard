import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
function CoinCard({ coin }) {
  const onGoingTrend = coin.price_change_percentage_24h > 0 ? "up" : "down";
  const uptrend = {
    sign: "+",
    class: "uptrend",
    color: "green",
  };
  const downtrend = {
    sign: "",
    class: "downtrend",
    color: "red",
  };
  const trend = onGoingTrend === "up" ? uptrend : downtrend;
  return (
    <div className="coin-box">
      <a href={`/coin?${coin.id}`}>
        <div className="logo-div">
          <img src={coin.image} className="logo" alt="logo" />
          <div className="trend-wrapper">
            <div className="coin-info">
              <p className="symbol">
                {coin.symbol}
                -USD
              </p>
              <p className="coin-name"> {coin.name}</p>
            </div>
            {onGoingTrend === "up" ? (
              <TrendingUpRoundedIcon
                fontSize="large"
                className={`trending-icon ${trend.class}`}
              />
            ) : (
              <TrendingDownRoundedIcon
                fontSize="large"
                className={`trending-icon ${trend.class}`}
              />
            )}
          </div>
        </div>
        <div className="data-div">
          <div className="chip-flex">
            <p className={`price`}>${coin.current_price.toLocaleString()} </p>
            <div className={`change ${trend.class}`}>
              {trend.sign + coin.price_change_percentage_24h.toFixed(2) + " %"}
            </div>
          </div>
          <div className="badge-Container">
            <div className="badge" data-title="Market cap">
              ${coin.market_cap.toLocaleString()}
            </div>
            <div className="badge" data-title="Total Volume">
              {coin.total_volume.toLocaleString()}
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

export default CoinCard;
