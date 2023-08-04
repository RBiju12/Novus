import Home from './Home.png'
import './Novus.css'
import {Card} from 'react-bootstrap'
import {useEffect} from 'react'
const Novus = () => {

    useEffect(() => {
        alert('Welcome to Novus!')
    }, [])

    //const [data, setData] = useState([])

    // useEffect(() => {
    //     fetchData();
    // }, [])


    // const fetchData = async() => {
    //     try{
    //         const response = await axios.get('http://localhost:5000/')
    //         setData(response.data)
    //         console.log(response)
    //     }
    //     catch(err){
    //         console.error("Error", err)
    //     }
    return(
        <>
            <div className='container'>
                <div className='novushome'>
                <img src={Home} className='novushome' alt='stockimg' />
                </div>
                <br />

                <Card bg='info' style={{ width: '80rem' }} className='mission'>
                    <Card.Title>Mission Statement:</Card.Title>
                    <br />
                    <Card.Body>
                    <Card.Text>
                    I am passionate about developing a stock market application that prioritizes analysis and statistics to reveal essential insights in earnings per day. By offering valuable data-driven analyses and concise reports, 
                    the application will empower investors with informed decision-making tools. 
                    It aims to simplify the complexities of the stock market, making it accessible to both seasoned investors and newcomers. 
                    The ultimate goal is to foster a community of informed investors and elevate financial literacy. 
                    Through continuous updates and user feedback, the application will remain a cutting-edge tool in stock market analysis and insights, 
                    ensuring a more secure and prosperous future for users.
                    </Card.Text>
                    </Card.Body>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </Card>
            </div>
        </>
    )

    }

export default Novus;