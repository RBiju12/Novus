import React from 'react';
import './styles.css';
import {useState} from 'react'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"

const Footer = () => {

    const [complete, setComplete] = useState(false)

    const fetchEndpoint = async() => {
        const response = await axios.get('http://localhost:5000/automate')
        .catch(err => {
            console.error('Error fetching endpoint', err)
        })
        setComplete(true)
        console.log(response)
        console.log(complete)
    }

    //Footer component that fetches my selenium endpoint and allows for automation of stock information/data


    const year = new Date().getFullYear();



  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h1 className='footheader'>Resources:</h1>
        <ul>
          <li>
            <a href="https://site.financialmodelingprep.com/education/best-stock-research-websites">Best Stock Websites</a>
          </li>
          <li>
            <a href="https://www.marketwatch.com/">Learn the Stock Market</a>
          </li>
        </ul>
      </div>
      <div className='footmiddle'>
        <h1>
            {`Copyright © Novus ${year}`}
        </h1>
      </div>
      <div className='automatebutton'>
        <Button variant='primary' onClick={fetchEndpoint}>
          Learn more about Stocks
          </Button>
      </div>
    </footer>
  );
}

export default Footer;
