import React from 'react'
import {useState} from 'react'
const Contact = () => {

    const [email, setEmail] = useState('')

    const [emails, setEmails] = useState('')

    const fetchEmail = () =>{
        setEmail('rishanbiju@gmail.com')
    }

    const submitvalidate = () => {
        if(emails.trim().length === 0){
            alert('Please enter your email!')
        }
        else if(!emails.slice(-9).includes('gmail.com') && !emails.slice(-11).includes('outlook.com')){
            alert('Please use Gmail or Outlook')
        }
        else{
            alert(`Thank you for registering: ${emails}`)
            setEmail('')
        }
    }

    return(
        <>
        <div className='footer'>
            <h1>Welcome to Contact Page</h1>
            <p>Sorry, I'm afraid I cannot generate an accurate output as "Lorem" is not a complete sentence or phrase. Can you please provide me with more context or information so I can assist you better?</p>
            <button onClick={fetchEmail}>Click to view email</button>
            <p>{email}</p>
        <div className='forms'>
            <form>
                <input type='text' className='textfield' value={emails} onChange={(e) => setEmails(e.target.value)}/>
                <button onClick={submitvalidate} type='submit' className='contact'>Submit</button>
            </form>
        </div>
        </div>
        </>

    )
}

export default Contact;