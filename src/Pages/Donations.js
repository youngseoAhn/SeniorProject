import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import './Donations.css';

const Donation = () => {
    return (
        <div>
            <Header/>
            <h1>Give to Safe Space</h1>
            <section>
            <p>We appreciate any way and any amount you can give. <br></br>
            {/* <a href="#monetary">Donate $</a><br></br>
            <a href="#items">Donate items</a><br></br>
            <a href="#time">Donate your time</a><br></br> */}
            </p>

            <h2 id="monetary">Monetary Donations</h2>
            <p>Use this <a href="https://www.paypal.com">Paypal link</a> to securely donate to us online. <br></br>
            You can also call our main office at (253) 692-4000 <br></br>every day from 8AM to 5PM to donate over the phone.</p>

            <h2 id="items">Physical Donations</h2>
            <p>Use this <a href="https://www.amazon.com">Amazon link</a> to view our clients' wishlist items. <br></br>
                <b>We accept all new or gently used clothing everyday from 8AM to 5PM. </b><br></br>
                Please call to set up a drop off outside of these hours.
            </p>

            <h2 id="time">Volunteering</h2>
            <p>Use this <a href="/">Signup Form</a> to schedule a volunteering shift. <br></br>
                We need help with: <br></br>
                - administrative office duties<br></br>
                - cooking and serving food<br></br>
                - sorting through physical donations<br></br>
                <br></br>
            </p>
            </section>
            
            <Footer/>
        </div>
    )
} 

export default Donation;