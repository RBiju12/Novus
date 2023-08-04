import './Novus.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button} from 'react-bootstrap'
import {Card} from 'react-bootstrap'
import {Table} from 'react-bootstrap';

const Markets = () => {
  const [marketData, setMarketData] = useState([]);
  const [info, setInfo] = useState('')


  //Fetches data from openAPI endpoint and displays text from chatbot

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

  //takes data from api and parses

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

  const stopChatBot = () => {
    setInfo('Chat Bot Closed')
  }

  //Stop function that ends chatbot functions

  console.log('Market Data:', marketData); 

  //The return function maps over all of the data and displays it in a table format
  //Also handles the chatbot functionalities for the end user

  return (
    <>
      <div className='markets'>
        <h1 className='markethead'>Markets:</h1>
        <br />

        {marketData.length === 0 ? (
          <p>Loading...</p>
        ) : (
          <Table className='centertable' striped bordered hover variant="dark">
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
          </Table>
        )}
        <br />
        <br />
        <br />
        <br />
        <div className='center'>
          <Card bg='info'>
            <Card.Title>View Financial Advice from chatbot</Card.Title>
        <Card.Body>
        <Button onClick={fetchChatBot} className='chatbot'>Click to Interact</Button>
        <br />
        <p>{info.data}</p>
        <Button variant='danger' onClick={stopChatBot}>Click to Stop</Button>
        </Card.Body>
        </Card>
        </div>
        <br />
      </div>
    </>
  );
};

export default Markets;
