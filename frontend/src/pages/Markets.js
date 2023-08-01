import './Novus.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Markets = () => {
  const [marketData, setMarketData] = useState([]);
  const [info, setInfo] = useState('')


  const fetchChatBot = React.useCallback(async() => {
    try{
      const res = await axios.get('http://localhost:5000/chatbot');
      console.log('Response', res.data);
      setInfo(res.data)
      console.log(info)
    }
    catch(err){
      console.error(err)
    }
  }, [info])

  const fetchData = React.useCallback(async () => {
    try {
      const response = await axios.get('http://localhost:5000/apidata');
      console.log('Response:', response.data); 
      setMarketData(response.data.markets); 
    } catch (err) {
      console.log('Error', err);
    }
  }, []);

  useEffect(() => {
    fetchData();
    fetchChatBot();
  }, [fetchData, fetchChatBot]);

  console.log('Market Data:', marketData); 

  return (
    <>
      <div className='markets'>
        <h1 className='markethead'>Markets:</h1>
        <br />

        {marketData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <table className='centertable'>
            <thead>
              <tr>
                <th>Market Type</th>
                <th>Region</th>
                <th>Status</th>
                <th>Local Open</th>
                <th>Local Close</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((item, index) => (
                <tr key={index}>
                  <td>{item.market_type}</td>
                  <td>{item.region}</td>
                  <td>{item.current_status}</td>
                  <td>{item.local_open}</td>
                  <td>{item.local_close}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        <br />
        <br />
        <br />
        <br />
        <div className='center'>
        <button onClick={fetchChatBot} className='chatbot'>Click to view Top 5 stocks to invest</button>
        <p>{info.data}</p>
        </div>
        <br />
      </div>
    </>
  );
};

export default Markets;
