import React from 'react'

const ContactForm = () => {
    return (
        <div>
            <form action="">
                <div className='contactForm'>
                    <input className='contact_input' type="text" placeholder='Name' />
                    <input className='contact_input' type="email" placeholder='Email' />
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm