import React from "react";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { motion } from "framer-motion";

function Grid({ coin, delay, clickable = true }) {
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
  const content = (
    <>
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
    </>
  );
  return clickable ? (
    <motion.div
      className="coin-box"
      initial={{ opacity: 0, x: 20, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "tween",
        duration: 0.3,
        delay: delay * 0.01,
      }}
    >
      <a href={`/coin?${coin.id}`}>{content}</a>
    </motion.div>
  ) : (
    <div className="coin-box-squared">
      <div>{content}</div>
    </div>
  );
}

export default Grid;
