import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import ChartLayout from "../components/DetailedChartComponents/ChartLayout";
import { ChartContext, ColorModeContext } from "../AppContext";
import { getOHLCData } from "../functions/getOHLCData";
export default function DetailedChart() {
  const [mode, setMode] = React.useState("dark");
  const [options, setOptions] = React.useState({
    coinid: "bitcoin",
    duration: 7,
    chartType: "candlestick",
    data: [],
  });
  const updateOptions = ({ coin, coinid, duration, chartType }) => {
    setOptions({
      coinid,
      coin,
      duration,
      chartType,
    });
    // console.log(chartType);
    getOHLCData(coinid, duration).then((data) => {
      if (chartType === "line") {
        let series = [];
        data[0]["data"].forEach(function (a, i) {
          series.push([a[0], a[4]]);
        });
        // console.log(data[0]["data"]);
        setOptions({
          coin,
          coinid,
          duration,
          chartType,
          data: [{ data: series }],
        });
      } else {
        setOptions({ coin, coinid, duration, chartType, data });
      }
    });

    // console.log(options);
  };

  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );
  useEffect(() => {
    window.localStorage.setItem("theme", mode);
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);
  useEffect(() => {
    updateOptions(options);
  }, []);
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ChartContext.Provider value={{ options, updateOptions }}>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <ChartLayout />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </ChartContext.Provider>
  );
}
