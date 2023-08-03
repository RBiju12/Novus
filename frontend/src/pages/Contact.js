import React from 'react'
import {useState, useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {TextField} from '@mui/material'
import {Card} from 'react-bootstrap'
import './Novus.css'

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
            <h1>Contact:</h1>
            <br />
            <p>Hi, my name is Rishan, and I'm a passionate web app developer with a focus on stock analysis. 
            Through my expertise in web development and my fascination with the financial markets, I'm creating a user-centric platform that 
            empowers investors to make informed decisions and navigate the complexities of stock analysis with ease. Join me on this exciting 
            journey as we explore the world of stocks together! Feel free to fill out the contact page to recieve updates on stock changes.</p>
            <br />
            <Button onClick={fetchEmail} className='email'>Click to view my email</Button>
            {pressed && <p>{email}</p>}
            <br />
            <br />
        <Card bg='info' style={{top: '20%', left: '50%', transform: 'translate(-50%, -2%)', width: '700px'}}>
        <div className='forms'>
            <br />
            <br />
            <br />
            <Card.Title>Sign up to recieve alerts:</Card.Title>
            <br />
            <br />
            <form>
                <Card.Title>First Name:</Card.Title>
                <TextField id="standard-basic" label="Enter your first name" variant="standard" type='text'  value={firstname} onChange={(e) => setFirstName(e.target.value)} />
                <br />
                <br />
                <Card.Title>Last Name:</Card.Title>
                <TextField id="standard-basic" label="Enter your last name" variant="standard" type='text' value={lastname} onChange={(e) => setLastName(e.target.value)} />
                <br />
                <br />
                <Card.Title>Email Address:</Card.Title>
                <TextField id="standard-basic" label="Enter your email address" variant="standard" type='text' value={emails} onChange={(e) => setEmails(e.target.value)}/>
                <br />
                <br />
                <br />
                <Button variant='primary' onClick={submitvalidate} type='submit' className='contact'>Submit</Button>
                <br />
                <br />
                <br />
                <br />
            </form>
        </div>
        </Card>
        </div>
        </>

    )
}

export default Contact;