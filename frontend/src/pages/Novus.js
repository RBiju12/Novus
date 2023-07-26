import Home from './Home.png'
import './Novus.css'
const Novus = () => {
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

                <div className='mission'>
                    <h1>Mission Statement:</h1>
                    <br />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </>
    )

    }

export default Novus;