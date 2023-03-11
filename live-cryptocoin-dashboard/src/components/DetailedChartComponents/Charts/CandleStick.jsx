import React from "react";
import Chart from "react-apexcharts";
import { Box } from "@mui/material";

function CandleStick({ coin, data, type }) {
  const options = {
    chart: {
      type: type,
    },
    tooltip: {
      theme: "dark",
    },
    zoom: {
      enabled: true,
    },

    title: {
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
    stroke: {
      width: 2,
    },
    colors: ["#2E93fA"],
    responsive: [
      {
        breakpoint: 500,
        options: {
          chart: {
            height: "680",
          },
        },
      },
      {
        breakpoint: 2000,
        options: {
          chart: {
            height: "640",
          },
        },
      },
    ],
  };

  return (
    <Box id="chart" sx={{ padding: 1 }}>
      {coin && (
        <span
          className=" mobile-only"
          style={{
            border: "1px solid",
            borderRadius: 3,
            padding: "4px 12px",
            margin: "4%",
            width: "max-content",
            fontSize: "90%",
          }}
        >
          {coin.id + " - " + coin.name}
        </span>
      )}
      <Chart options={options} series={data} type={type} />
    </Box>
  );
}

export default CandleStick;
