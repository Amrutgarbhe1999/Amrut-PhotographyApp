import React from 'react'

const Contactus = () => {
    return (
        <>
            <div className="contactus">
                <div className="contact_heading">
                    <h1> LET’S START SOMETHING NEW <br />
                        <span> SAY HELLO!</span></h1>

                    <p>   Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt  <br />
                        mollit laborum. Sed ut perspiciatis unde omnis.</p>

                </div>
                <div className="form">
                    <input type="text" placeholder='Name' />
                    <input type="text" placeholder='Email Address' />
                    <input type="text" placeholder='Contact Number' />
                    <input type="text" placeholder='Write something' />
                    <div className="btn">
                        <button>Send</button>
                    </div>

                </div>
            </div>





        </>
    )
}

export default Contactus