import React, { useState } from "react";
import CoinPageDesc from "../components/CoinPageComponents/CoinPageDesc";
import CompareGraph from "../components/compareComponents/CompareGraph";
import ListFlex from "../components/compareComponents/ListFlex";
import SelectCoins from "../components/compareComponents/SelectCoins";
import Header from "../components/Header";
import "./styles.css";
import { useEffect} from 'react';
import NewsFeed from ".././components/NewsFeed";


function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(30);
  const [crypto1Desc, setCrypto1Desc] = useState("");
  const [crypto2Desc, setCrypto2Desc] = useState("");
  const [type, setType] = useState("prices");

    const [cryptocurrencies, setcryptocurrencies] = useState([])
    const [cryptoTo, setcryptoTo] = useState(null)
    const [cryptoFrom, setcryptoFrom] = useState(null)
    const [amount, setamount] = useState(null)
    const [result, setresult] = useState(null)
    const fetchCrypto = async() =>{
      var requestOptions = {
        method: 'GET',
        Authorization :"Bearer 9d228abf-8e1e-407f-95b9-edc1d8635583",
        redirect: 'follow',
      };
      const response = await fetch("https://api.coincap.io/v2/assets?limit=1000",requestOptions)
      const responseparshed = await response.json()
      setcryptocurrencies(responseparshed.data)
    }
  
    useEffect(() => {
      fetchCrypto();
    },[cryptoFrom,cryptoTo])
  
    const handleChange = (e) =>{
      if(e.target.id === "select-one"){
        setcryptoFrom(e.target.value)
      }else if(e.target.id === "select-two"){
        setcryptoTo(e.target.value)
      }
    }
  
    useEffect(() => {
      if(cryptoFrom && cryptoTo) {
        let option1 = document.querySelector(`#${cryptoFrom}`).getAttribute("data_price")
        let option2 = document.querySelector(`#${cryptoTo}`).getAttribute("data_price")
        setresult(((option1/option2)*amount).toFixed(2));
      }
    },[amount,cryptoFrom,cryptoTo])
    const convertamount = (e) =>{
      setamount(e.target.value)
    }
  return (
    <>
      <Header />
      <SelectCoins
        crypto1={crypto1}
        crypto2={crypto2}
        setCrypto1={setCrypto1}
        setCrypto2={setCrypto2}
        days={days}
        setDays={setDays}
      />
      <ListFlex
        crypto1={crypto1}
        crypto2={crypto2}
        setCrypto1Desc={setCrypto1Desc}
        setCrypto2Desc={setCrypto2Desc}
      />
      <CompareGraph
        crypto1={crypto1}
        crypto2={crypto2}
        days={days}
        type={type}
        setType={setType}
      />
      {/* <div className="compare-desc">
        <CoinPageDesc name={crypto1} desc={crypto1Desc} />
        <CoinPageDesc name={crypto2} desc={crypto2Desc} />
      </div> */}
      <div className="Exchange">

      <section className='converter'>
        <h1>Converter </h1>
        <select id='select-one' onChange={handleChange} >
          {cryptocurrencies.map(crypto => <option value={crypto.id} id={crypto.id} key={crypto.id} data_price={crypto.priceUsd}>{crypto.id}</option>)}
          </select>
        <select id='select-two' onChange={handleChange} >
          {cryptocurrencies.map(crypto => <option value={crypto.id} id={crypto.id} key={crypto.id} data_price={crypto.priceUsd}>{crypto.id}</option>)}
          </select>
        
        <input type="text" id='useramount' onChange={convertamount}  placeholder="Amount"/>
        <section className='fromto'>
        <p>{cryptoFrom}</p>
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg> */}
        {/* <p>{cryptoTo}</p> */}
        </section>
        <section className='result'>
          <h2>{result}</h2>
          <p>{cryptoTo}</p>
        </section>
      </section>
      

      <section style={{ marginTop: '20px' }}>
    <h2>News Feed</h2>
    <NewsFeed/>
  </section>
    </div>
    </>
  );
  
}




export default ComparePage;


