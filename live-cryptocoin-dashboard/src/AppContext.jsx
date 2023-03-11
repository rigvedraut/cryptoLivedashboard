import { createContext } from "react";
const ColorModeContext = createContext({ toggleColorMode: () => {} });
const CoinListDrawerContext = createContext({
  toggleCoinListDrawer: () => {},
});
const ChartContext = createContext({
  duration: 30,
  chartType: "candlestick",
  updateOptions: () => {},
});

export { ColorModeContext, ChartContext, CoinListDrawerContext };
