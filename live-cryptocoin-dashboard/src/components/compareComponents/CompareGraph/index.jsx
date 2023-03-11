import axios from "axios";
import React, { useEffect, useState } from "react";
// import { COIN_GECKO_URL } from "../../../constants";
import { convertNumbers } from "../../../functions/convertNumbers";
import { getDaysArray } from "../../../functions/getDaysArray";
import { getPrices } from "../../../functions/getPrices";
import ColorToggleButton from "../../CoinPageComponents/Toggle";
import LineChart from "../../Dashboard/LineChart";
import Loader from "../../Loader";
import "./styles.css";
function CompareGraph({ crypto1, crypto2, days, type, setType }) {
  const today = new Date();
  const priorDate = new Date(new Date().setDate(today.getDate() - days));

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: `Comparison betweeen ${crypto1} and ${crypto2}`,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        ticks:
          type === "market_caps"
            ? {
                callback: function (value) {
                  return "$" + convertNumbers(value);
                },
              }
            : type === "total_volumes"
            ? {
                callback: function (value) {
                  return convertNumbers(value);
                },
              }
            : {
                callback: function (value, index, ticks) {
                  return "$" + value.toLocaleString();
                },
              },
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        ticks:
          type === "market_caps"
            ? {
                callback: function (value) {
                  return "$" + convertNumbers(value);
                },
              }
            : type === "total_volumes"
            ? {
                callback: function (value) {
                  return convertNumbers(value);
                },
              }
            : {
                callback: function (value, index, ticks) {
                  return "$" + value.toLocaleString();
                },
              },
      },
    },
  };

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const prices_data1 = await getPrices(crypto1, days, type);
    const prices_data2 = await getPrices(crypto2, days, type);
    var dates = getDaysArray(priorDate, today);
    setChartData({
      labels: dates,
      datasets: [
        {
          label: crypto1,
          data: prices_data1?.map((data) => data[1]),
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          backgroundColor: "transparent",
          borderColor: "#3a80e9",
          pointRadius: 0,
          yAxisID: "y",
        },
        {
          label: crypto2,
          data: prices_data2?.map((data) => data[1]),
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          backgroundColor: "transparent",
          borderColor: "#61c96f",
          pointRadius: 0,
          yAxisID: "y1",
        },
      ],
    });
  };
  return (
    // <div className="coin-page-div">
    <div className="coin-page">
      <div className="toggle-flex">
        <ColorToggleButton
          type={type}
          setType={setType}
          days={days}
          chartData={chartData}
          setChartData={setChartData}
          id={crypto1}
          id2={crypto2}
        />
      </div>
      <div className="grph-wrapper">
        <LineChart chartData={chartData} options={options} />
      </div>
    </div>
    // </div>
  );
}

export default CompareGraph;
