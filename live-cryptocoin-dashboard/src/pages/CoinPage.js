import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { ButtonOutlined } from "../components/Utilities/Buttons";
import LineChart from "../components/Dashboard/LineChart";
import Header from "../components/Header";
import Loader from "../components/Loader";
import List from "../components/Dashboard/List";
import SelectDays from "../components/CoinPageComponents/SelectDays";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { getPrices } from "../functions/getPrices";

import ColorToggleButton from "../components/CoinPageComponents/Toggle";
import { convertNumbers } from "../functions/convertNumbers";

function CoinPage() {
  const [searchParams] = useSearchParams();

  const [data, setData] = useState();
  //   const [dates, setDates] = useState([]);
  const [type, setType] = useState("prices");

  const [loading, setLoading] = useState(true);
  const [loadingChart, setLoadingChart] = useState(true);
  const [coin, setCoin] = useState({});
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState();

  const createChartData = (labels = [], data = []) => {
    setChartData({
      labels,
      datasets: [
        {
          data,
          // label: searchParams.toString(),
          borderWidth: 2,
          fill: false,
          tension: 0.25,
          backgroundColor: "#3a80e9",
          borderColor: "#3a80e9",
          pointRadius: 0,
        },
      ],
    });
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      y: {
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

  const today = new Date();
  const priorDate = new Date(new Date().setDate(today.getDate() - days));

  var getDaysArray = function (starting, ending) {
    for (
      var a = [], d = new Date(starting);
      d <= new Date(ending);
      d.setDate(d.getDate() + 1)
    ) {
      a.push(new Date(d).getDate() + "/" + (new Date(d).getUTCMonth() + 1));
    }
    return a;
  };

  const getData = async () => {
    const API_URL = `https://api.coingecko.com/api/v3/coins/${searchParams}`;

    const response_data = await axios.get(API_URL.slice(0, -1), {
      crossDomain: true,
    });

    if (!response_data) {
      console.log("No data");
      return;
    }
    setData(response_data.data);

    // console.log("response data>>>", response_data.data);

    const API_URL2 = `https://api.coingecko.com/api/v3/coins/${response_data.data.id}/market_chart?vs_currency=usd&days=${days}&interval=daily`;

    const prices_data = await axios.get(API_URL2, {
      crossDomain: true,
    });

    if (!prices_data) {
      console.log("No price data");
      return;
    }

    // setPrices(prices_data.data.prices);

    var dates_2 = getDaysArray(priorDate, today);
    let data = prices_data?.data?.prices?.map((data) => data[1]);
    createChartData(dates_2, data);
    setLoadingChart(false);
    // setLoading(false);

    setCoin({
      id: response_data.data.id,
      name: response_data.data.name,
      symbol: response_data.data.symbol,
      image: response_data.data.image.large,
      price_change_percentage_24h:
        response_data.data.market_data.price_change_percentage_24h,
      total_volume: response_data.data.market_data.total_volume.usd,
      current_price: response_data.data.market_data.current_price.usd,
      market_cap: response_data.data.market_data.market_cap.usd,
    });
    setLoading(false);
  };

  useEffect(() => {
    if (searchParams) {
      getData();
    }
  }, [searchParams]);

  const handleChange = async (event) => {
    setDays(event.target.value);
    const API_URL2 = `https://api.coingecko.com/api/v3/coins/${data.id}/market_chart?vs_currency=usd&days=${event.target.value}&interval=daily`;

    const prices_data = await axios.get(API_URL2, {
      crossDomain: true,
    });

    if (!prices_data) {
      console.log("No price data");
      return;
    }

    // setPrices(prices_data.data.prices);

    const priorDate_2 = new Date(
      new Date().setDate(today.getDate() - event.target.value)
    );

    var dates_2 = getDaysArray(priorDate_2, today);
    let temp_prices_data = prices_data?.data?.prices?.map((data) => data[1]);

    createChartData(dates_2, temp_prices_data);
  };

  return (
    <>
      {loading && loadingChart ? (
        <Loader />
      ) : (
        <>
          <Header />

          <div className="coin-page-div">
            {coin.id && <List coin={coin} delay={2} />}
          </div>
          <div className="coin-page-div">
            <div style={{ color: "var(--white)" }}>
              Price Change in the last{" "}
              <SelectDays days={days} handleChange={handleChange} />
            </div>
            <div className="toggle-flex">
              <ColorToggleButton
                type={type}
                setType={setType}
                days={days}
                chartData={chartData}
                setChartData={setChartData}
                id={data.id}
              />
            </div>
            x
            <LineChart chartData={chartData} options={options} />
          </div>
          <div className="coin-page-div description">
            <h2>{data.name}</h2>
            <p dangerouslySetInnerHTML={{ __html: data.description.en }} />
          </div>
        </>
      )}
    </>
  );
}

export default CoinPage;
