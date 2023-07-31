import React from 'react'
import {useState, useEffect} from 'react'
const Contact = () => {

    const [email, setEmail] = useState('')

    const [emails, setEmails] = useState('')

    const [firstname, setFirstName] = useState('')

    const [lastname, setLastName] = useState('')

    const [pressed, setPressed] = useState(true)

    const fetchEmail = () =>{
        setEmail('rishanbiju@gmail.com')
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setPressed(false)
        }, 30000)

        return () => setTimeout(timer)
    }, [])

    const submitvalidate = () => {
        if(emails.trim().length === 0 || firstname.trim().length === 0 || lastname.trim().length === 0){
            alert('Please enter all the fields!')
        }
        else if(!emails.slice(-9).includes('gmail.com') && !emails.slice(-11).includes('outlook.com')){
            alert('Please use Gmail or Outlook')
        }
        else{
            alert(`Thank you for registering: ${emails}`)
            setFirstName('')
            setLastName('')
            setEmails('')
        }
    }

    return(
        <>
        <div className='contactpage'>
            <h1>Contact</h1>
            <br />
            <p>Hi, my name is Rishan, and I'm a passionate web app developer with a focus on stock analysis. 
            Through my expertise in web development and my fascination with the financial markets, I'm creating a user-centric platform that 
            empowers investors to make informed decisions and navigate the complexities of stock analysis with ease. Join me on this exciting 
            journey as we explore the world of stocks together! Feel free to fill out the contact page to recieve updates on stock changes.</p>
            <br />
            <button onClick={fetchEmail} className='email'>Click to view my email</button>
            {pressed && <p>{email}</p>}
            <br />
        <div className='forms'>
            <br />
            <br />
            <br />
            <h1>Sign up to recieve alerts:</h1>
            <br />
            <br />
            <form>
                <label for="first-name">First Name:</label>
                <input type='text' className='name' value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                <br />
                <br />
                <label for="last-name">Last Name:</label>
                <input type='text' className='lastname' value={lastname} onChange={(e) => setLastName(e.target.value)} />
                <br />
                <br />
                <label for="last-name">Email Address:</label>
                <input type='text' className='textfield' value={emails} onChange={(e) => setEmails(e.target.value)}/>
                <br />
                <br />
                <br />
                <button onClick={submitvalidate} type='submit' className='contact'>Submit</button>
                <br />
                <br />
                <br />
                <br />
            </form>
        </div>
        </div>
        </>

    )
}

export default Contact;