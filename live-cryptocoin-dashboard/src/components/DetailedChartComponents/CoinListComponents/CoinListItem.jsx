import React, { useEffect } from "react";
import { Divider, TableRow, TableCell, ListItemText } from "@mui/material";
import { useContext } from "react";
import { ChartContext, CoinListDrawerContext } from "../../../AppContext";
function CoinListItem({ coin }) {
  const { options, updateOptions } = useContext(ChartContext);
  const coinListDrawer = useContext(CoinListDrawerContext);

  const updateCoin = (coin) => {
    updateOptions({ ...options, coinid: coin.id, coin });
    if (window.innerWidth < 800) coinListDrawer.toggle();
  };
  let trend = coin.price_change_percentage_24h > 0 ? "uptrend" : "downtrend";
  let trendSign = coin.price_change_percentage_24h > 0 ? "+" : "";

  useEffect(() => {
    if (coin.id === options.coinid)
      updateOptions({ ...options, coinid: coin.id, coin });
  }, []);
  return (
    <TableRow
      key={coin.id}
      component="tr"
      sx={{
        fontWeight: "bolder",
      }}
      selected={coin.id === options.coinid}
      onClick={() => updateCoin(coin)}
    >
      <TableCell sx={{ maxWidth: 10, verticalAlign: "center" }}>
        <img
          style={{ borderRadius: "50%", backgroundColor: "var(--white)" }}
          src={coin.image}
          alt="crypto-logo"
          width={25}
        />
      </TableCell>
      <TableCell sx={{ maxWidth: 100 }}>{coin.id}</TableCell>
      <TableCell>
        <div className={`change ${trend}`} style={{ margin: 0 }}>
          {trendSign + coin.price_change_percentage_24h.toFixed(4)}
        </div>
      </TableCell>
      <TableCell>
        <span className={trend} style={{ opacity: 0.9 }}>
          {coin.current_price}
        </span>
      </TableCell>
    </TableRow>
  );
}
{
}
export default CoinListItem;
