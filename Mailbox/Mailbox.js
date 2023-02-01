import React, { useState } from 'react'
import './Mailbox.css'


const Mailbox = () => {

    const [display, setdisplay] = useState(false)
    const [form, setform] = useState(true)
    const [email, setemail] = useState('')
    function submissionReceived(e) {
        const emailRegex = /^\S+@\S+\.\S+$/;
        e.preventDefault()
        if (!emailRegex.test(email)) {
            alert("Invalid email");
            return;
        }

        setdisplay(true)
        setform(false)

    }

    return (
        <div className='cta'>
            <div className='cta1 cta1display'>
                <h4>Keep your finger on the pulse with our new releases</h4>
                {form && <form className='ctaForm'>
                    <input placeholder='ex.johndoe@gmail.com' type='email' value={email} onChange={e => setemail(e.target.value)} />
                    <button onClick={submissionReceived}>Get the inside scoop</button>
                </form>}

                {display && <div className='cta2 cta2display'>
                    <div className='cheers'>
                        <p>Welcome, Cheers 🎉 </p>
                    </div>
                </div>}
            </div>

        </div >
    )
}

export default Mailbox