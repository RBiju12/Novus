import ArticleCard from '../components/articlecard'
import {useState, useEffect} from 'react'
import axios from 'axios'
import './Novus.css'

const Articles = () => {

    const [text, setText] = useState('')
    const [text2, setText2] = useState('')
    const [text3, setText3] = useState('')
    const [text4, setText4] = useState('')


    //Extracted data from backend endpoint 1 and grabbed text to display in Card Component
    const fetchArticle1 = async() => {
        try{
        const response = await axios.get('http://localhost:5000/scrape1')
        console.log(response)
        setText(JSON.stringify(response))
        setText(response.data)
        }
        catch(err){
            console.error(err)
        }
    }

    //Extracted data from backend endpoint 2 and grabbed text to display in Card Component

    const fetchArticle2 = async() => {
        try{
        const response = await axios.get('http://localhost:5000/scrape2')
        console.log(response)
        setText2(JSON.stringify(response))
        setText2(response.data)
        }
        catch(err){
            console.error(err)
        }
    }

    //Extracted data from backend endpoint 3 and grabbed text to display in Card Component
    const fetchArticle3 = async() => {
        try{
        const response = await axios.get('http://localhost:5000/scrape3')
        console.log(response)
        setText3(JSON.stringify(response))
        setText3(response.data)
        }
        catch(err){
            console.error(err)
        }
    }

    //Extracted data from backend endpoint 4 and grabbed text to display in Card Component

    const fetchArticle4 = async() => {
        try{
        const response = await axios.get('http://localhost:5000/scrape4')
        console.log(response)
        setText4(JSON.stringify(response))
        setText4(response.data)
        }
        catch(err){
            console.error(err)
        }
    }

    useEffect(() => {
        fetchArticle1();
        fetchArticle2();
        fetchArticle3();
        fetchArticle4();
    }, [])

    const articledata = {
        title: 'San Francisco Market Price',
        content: text,
        imageUrl: 'https://wolfstreet.com/wp-content/uploads/2023/02/US-california-housing-CAR-2023-02-16-San-Francisco.png'
    }

    const articledata2 = {
        title: 'Stock Fall',
        content: text2,
        imageUrl: 'https://d3i6fh83elv35t.cloudfront.net/static/2022/02/newswrap-13-1024x683.jpg'
    }

    const articledata3 = {
        title: 'Interest Rates Soar',
        content: text3,
        imageUrl: 'https://advisor.visualcapitalist.com/wp-content/uploads/2022/03/Rising-Interest_Rates_Preview.jpg'
    }

    const articledata4 = {
        title: 'Rise & Fall of Bitcoin',
        content: text4,
        imageUrl: 'https://www.bankrate.com/2020/08/24165602/what-is-bitcoin.jpeg?auto=webp&optimize=high&crop=16:9'
    }

    //Card Component that displays the data - 4 Cards

    return(
        <>
        <div className='articlecontain'>
        <h1 className='articlehead'>Articles:</h1>
        <ArticleCard article={articledata3} className='articleright'/>
        <ArticleCard article={articledata} className='articlefirst' />
        <br></br>
        <ArticleCard article={articledata2} />
        <ArticleCard article={articledata4} className='articlelast' />
        </div>
        </>
    )
}

export default Articles