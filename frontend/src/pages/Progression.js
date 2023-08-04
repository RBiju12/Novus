import StockSelect from '../components/Stockselect'
import './Novus.css'
const Progression = () => {

    //Renders StockSelect Component
    return(
        <>
        <div className='progression'>
        <h1>Progression:</h1>
        <StockSelect />
        </div>
        </>
    )
}

export default Progression;