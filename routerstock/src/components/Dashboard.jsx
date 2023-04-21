import React, {useEffect, useState} from 'react';
import { } from 'react-router-dom';


const Dashboard =() => {

const [stocks, setStocks] = useState([]);

  useEffect (() => {
const fetchData = async () => {
  try {
    const response = await fetch("https://financialmodelingprep.com/api/v3/available-traded/list?apikey=e84a1be3b2c14e1b35698b937b1c2d6a");

const data = await response.json();
    setStocks(data);
  } catch (error) {
    console.log(error);  
}
      
};

fetchData();
}, []);
        
    return (
<div>
<h1>Stocks Dashboard</h1>
    {stocks.map((stock) => (
<div key={stock.symbol}>
<h2>{stock.name}</h2>
<p>Symbol: {stock.symbol}</p>
<p>Exchange: {stock.exchange}</p>   
</div>
))}
</div>
);
};
    
    
 
export default Dashboard;