import {useState, useEffect} from 'react'
import axios from 'axios'
import ReactApexChart from 'react-apexcharts'
import './styles.css'

const Stockselect = ({id, className}) => {
    const [options, setOptions] = useState({
        chart: {
            id: 'barchart'
        },
        xaxis: {
            categories: [],
        },
    })


    const [series, setSeries] = useState([
    {
        name: 'series1',
        data: [],
    },
    {
        name: 'series2',
        data: [],
    }
    
    ])

    const[series2, setSeries2] = useState([
        {
            name: 'series3', 
            data: [],
        },
        {
            name:'series4',
            data: [],
        }
    ]

    )

    const fetchTicketer = async() => {
        const response = await axios.get('http://localhost:5000/graphdata2')
        console.log(response.data)
        setOptions({
            ...options,
            xaxis: {
                categories: response.data
            },
            colors: ['#F44336', '#0000FF'],
        })
    }

    const fetchInfo = async() => {
        const response = await axios.get('http://localhost:5000/graphdata1')
        console.log(response.data.companies.slice(-2))
        const changes = await axios.get('http://localhost:5000/graphdata3')
        console.log(changes.data.change.slice(-2))
        setSeries([
            {
                name: 'Price',
                data: response.data.companies
            },
            {
                name: 'Change Amount',
                data: changes.data.change
            }
        ])
    }

    const fetchDataPoints = async() => {
        const response = await axios.get('http://localhost:5000/graphdata4')
        console.log(response.data.percentage)
        const vol = await axios.get('http://localhost:5000/graphdata5')
        console.log(vol.data.volume)
        setSeries2([
            {
                name: 'Change Percentage',
                data: response.data.percentage
            },
            {
                name: 'Volume',
                data: vol.data.volume
            }
        ])
    }

    useEffect(() => {
        fetchTicketer()
        fetchInfo()
        fetchDataPoints()
    }, [])


    return(
        <div className='parent'>
        <br />
        <p className='chartmiddle'><strong>Price and Change Amount</strong></p>
        <ReactApexChart options={options} series={series}  type="bar"  height="330" />
        <br />
        <br />
        <br />
        <br />
        <p className='chartmiddle'><strong>Change Percentage and Volume</strong></p>
        <ReactApexChart options={options} series={series2} type="bar" height="360" />
        </div>
    )

}


export default Stockselect;