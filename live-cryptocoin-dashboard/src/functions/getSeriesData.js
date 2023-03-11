import axios from "axios";
import { COIN_GECKO_URL } from "../constants";

export const getOHLCData = async (id, days) => {
  const API_URL = COIN_GECKO_URL + `${id}/ohlc?vs_currency=usd&days=${days}`;

  const ohlc_data = await axios.get(API_URL, {
    crossDomain: true,
  });

  if (!ohlc_data) {
    console.log("No OHLC data");
    return;
  }

  return [{ data: ohlc_data.data }];
};
