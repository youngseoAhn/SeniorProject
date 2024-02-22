import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import './Donations.css'; // Ensure the CSS file path is correctly referenced
import './Donations1.css'; // Ensure the CSS file path is correctly referenced


const Donation = () => {
  return (

    <div className='Donation'>
      <Header />

      <div className="secFill">
                <div className="secDescription">
                <div className="firstDescriptionHeader">
                    <h1>Why are Donations Important</h1>
                    </div>
                    <p className="description11">
                    Donations are the cornerstone of our ability to drive positive 
                    change, providing us with the essential resources needed to <br></br>tackle challenges head-on. Your generous support 
                    enables us to innovate, grow, and deepen our impact, ensuring that we can continue to offer 
                    vital services and create a brighter future for those we serve.</p>
                </div>
                <img src="Donations2.jpg" className="careerFirstImage"></img>
        </div>


     <div className="donation-page">
      <main>
        <h1>Give to Safe Space</h1>
        <br></br>
        <section>
          <p>We appreciate any way and any amount you can give.</p>

          <h2 id="monetary">Monetary Donations</h2>
          <p>Use this <a href="https://www.paypal.com">Paypal link</a> to securely donate to us online.<br />
            You can also call our main office at (253) 692-4000 every day from 8AM to 5PM to donate over the phone.</p>

          <h2 id="items">Physical Donations</h2>
          <p>Use this <a href="https://www.amazon.com">Amazon link</a> to view our clients' wishlist items.<br />
            <strong>We accept all new or gently used clothing everyday from 8AM to 5PM.</strong><br />
            Please call to set up a drop off outside of these hours.</p>

          <h2 id="time">Volunteering</h2>
          <p>Please call us to view availabilities and schedule a volunteering shift.<br />
            We need help with:<br />
            - administrative office duties<br />
            - cooking and serving food<br />
            - sorting through physical donations<br />
          </p>
        </section>
      </main>

    </div>
    
      {/* Animated Section for Engagement */}
      <div className="animated-section">
        <h2>Why Your Donation Matters</h2>
        <p>Every contribution helps us provide essential services to those in need. Your support makes a real difference in people's lives.</p>
      </div>

      {/* Testimonials */}
      <div className="testimonial">
        <p>"Thanks to generous donations, I found the support I needed during tough times. - A Grateful Recipient"</p>
      </div>

 {/* Impact Stories Section */}
 <div className="impact-stories animated-section">
        <h2>Impact Stories</h2>
        <div className="story">
          <img src="/path/to/story1.jpg" alt="Story 1" />
          <p>Discover how your donations have transformed lives, providing hope and support to those in need.</p>
        </div>
      </div>

      {/* Visual Gallery */}
      <div className="gallery animated-section">
        <h2>Gallery</h2>
        <div className="images">
          <img src="" alt="Gallery Image 1" />
          <img src="" alt="Gallery Image 2" />
          {/* Add more images as needed */}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta animated-section">
        <h2>Join Us in Making a Difference</h2>
        <p>Your support is crucial for our continued ability to serve. Every donation, big or small, contributes to our mission.</p>
        <button>Donate Now</button>
      </div>


    <Footer />



    </div>
  );
}

export default Donation;
