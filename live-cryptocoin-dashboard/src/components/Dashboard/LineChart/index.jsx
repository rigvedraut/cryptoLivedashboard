import React from "react";
import "./styles.css";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function LineChart({ size, chartData, options }) {
  return <Line data={chartData} options={options} />;
}

export default LineChart;
