import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Brightness4, Brightness7, Home, Menu } from "@mui/icons-material";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import {
  ChartContext,
  ColorModeContext,
  CoinListDrawerContext,
} from "../../AppContext";
function ChartOptions({ handleListClose }) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  const coinListDrawer = React.useContext(CoinListDrawerContext);
  const [duration, setDuration] = useState(30);
  const [chartType, setChartType] = useState("candlestick");
  const { options, updateOptions } = useContext(ChartContext);

  const updateDuration = (d) => {
    setDuration(d);
    updateOptions({ ...options, duration: d });
    // console.log(d);
  };
  const updateChartType = (ct) => {
    setChartType(ct);
    updateOptions({ ...options, chartType: ct });
    // console.log(ct);
  };
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        position: "relative",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "background.default",
        color: "text.primary",
        p: { sm: 1, md: 2 },
        pt: 2,
        pb: 1,
        borderBottom: "1px solid var(--darkgrey)",
      }}
    >
      <Box display="flex" gap={1}>
        <IconButton component={Link} to="/">
          <Home />
        </IconButton>
        <FormControl
          sx={{ width: { xs: 100, sm: 150, md: 150, lg: 120 } }}
          size="small"
        >
          <InputLabel id="duration-select-small">Duration</InputLabel>
          <Select
            labelId="duration-select-small"
            id="duration-select-small"
            value={duration}
            label="Duration"
            onChange={(e) => updateDuration(e.target.value)}
          >
            <MenuItem value={1}>1 Days</MenuItem>
            <MenuItem value={7}>1 Week</MenuItem>
            <MenuItem value={14}>2 Weeks</MenuItem>
            <MenuItem value={30}>1 Month</MenuItem>
            <MenuItem value={90}>3 Months</MenuItem>
            <MenuItem value={180}>6 Months</MenuItem>
            <MenuItem value={365}>1 year</MenuItem>
            <MenuItem value="max">All times</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{ width: { xs: 100, sm: 150, md: 150, lg: 150 } }}
          size="small"
        >
          <InputLabel id="charttype-select-small">Chart Type</InputLabel>
          <Select
            labelId="charttype-select-small"
            id="charttype-select-small"
            value={chartType}
            label="Chart type"
            onChange={(e) => updateChartType(e.target.value)}
          >
            <MenuItem value="candlestick">Candlestick</MenuItem>
            <MenuItem value="line">Line</MenuItem>
            <MenuItem value="area">Area</MenuItem>
          </Select>
        </FormControl>
        <IconButton onClick={colorMode.toggleColorMode} color="inherit">
          {theme.palette.mode === "dark" ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Box>

      <IconButton onClick={coinListDrawer.toggle}>
        <Menu />
      </IconButton>
    </Box>
  );
}

export default ChartOptions;
