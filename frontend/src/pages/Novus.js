import {useState, useEffect} from 'react'
import axios from 'axios'

const Novus = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async() => {
        try{
            const response = await axios.get('http://localhost:5000/')
            setData(response.data)
            console.log(response)
        }
        catch(err){
            console.error("Error", err)
        }

    }
    return(
        <>
        <h1>Welcome to Novus page</h1>
        <button onClick={fetchData}>Click me</button>
        <p>{data.info}</p>
        </>
    )
}

export default Novus