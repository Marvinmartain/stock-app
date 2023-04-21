import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Stock= () => {
    const { symbol } = useParams();
    const [stockInfo, setStockInfo] = useState({});

    useEffect (() => {
        const fetchStockInfo = async () => {
          try {
            const response = await fetch("https://financialmodelingprep.com/api/v3/available-traded/list?apikey=e84a1be3b2c14e1b35698b937b1c2d6a");
        
        const data = await response.json();
            setStockInfo(data.find(stock => stock.symbol === symbol));
          
        }catch (error) {
            console.log(error);  
        }
              
        };
        
        fetchStockInfo();
        }, [symbol]);
   
  return (
    <div>
        <h1>{stockInfo.companyName}</h1>
        <p>Symbol: {stockInfo.symbol}</p>
        <p>Price: {stockInfo.price}</p>
        <p>Beta: {stockInfo.beta}</p>
        <p>Exchange: {stockInfo.exchange}</p>
    </div>
  );
};

export default Stock;