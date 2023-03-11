import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import CoinList from "./CoinListComponents/CoinList";
import ChartOptions from "./ChartOptions";
import CandleStick from "./Charts/CandleStick";
import { useContext } from "react";
import { ChartContext, CoinListDrawerContext } from "../../AppContext";
import ChartWrapper from "./ChartWrapper";
export default function ChartLayout() {
  const { options, updateOptions } = useContext(ChartContext);
  const [open, setOpen] = useState(true);

  const coinListDrawer = React.useMemo(() => ({
    toggle: () => {
      setOpen((prev) => !prev);
    },
  }));

  return (
    <CoinListDrawerContext.Provider value={coinListDrawer}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100vh",
          color: "text.primary",
          bgcolor: "background.default",
          overflow: "hidden",
        }}
      >
        <ChartWrapper open={open}>
          <ChartOptions handleListClose={coinListDrawer.toggle} open={open} />
          {options.data && (
            <CandleStick
              data={options.data}
              coin={options.coin}
              type={options.chartType}
            />
          )}
        </ChartWrapper>

        <CoinList open={open} handleListClose={coinListDrawer.toggle} />
      </Box>
    </CoinListDrawerContext.Provider>
  );
}
