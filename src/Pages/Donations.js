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
        <p>Every contribution, no matter its size, plays a pivotal role in our ability to provide 
          essential services to those most in need. Your support is not just a donation; it's a lifeline 
          that extends hope and assistance to individuals and families facing challenging times. With each 
          act of generosity, you directly impact lives, offering not just immediate aid but the promise 
          of a brighter future. Your support enables us to tackle a wide array of needs—from emergency 
          relief in the wake of disasters to long-term projects aimed at breaking the cycle of poverty and 
          inequality. It funds critical services such as healthcare, education, and access to clean water 
          and nutritious food, which are fundamental to lifting communities out of despair and dependency.
          Moreover, your contributions help us to innovate and expand our programs, reaching more people 
          and making our interventions more effective. They allow us to invest in local communities, 
          building their capacity to become self-sustaining and resilient. By empowering people with 
          the tools, knowledge, and resources they need, we are together creating a foundation for lasting change.
          Behind every dollar donated is a story of compassion and hope. Each donation reflects a shared
          belief in the power of humanity to overcome adversity. We are constantly inspired by the 
          generosity of our supporters, whose unwavering commitment fuels our mission and amplifies our impact.
          As we continue to navigate the complexities of providing aid in a rapidly changing world, your s
          upport becomes ever more critical. It enables us to respond swiftly to crises, adapt to emerging needs,
          and continue our vital work without interruption. Every contribution is an affirmation of your faith 
          in our mission and a testament to the collective power of individuals working together for the greater good.
          We are deeply grateful for your support, which not only changes lives but also saves them. Together,
          we are making a real difference in the world, one life at a time. Thank you for being a part of this 
          journey of compassion, resilience, and hope. Your involvement is the cornerstone of our success and 
          a beacon of hope for those we serve.</p>
      </div>

      {/* Testimonials */}
      <div className="testimonial">
        <p>"Thanks to generous donations, I found the support I needed during tough times. - A Grateful Recipient"</p>
      </div>

 {/* Impact Stories Section */}
 <div className="impact-stories animated-section">
  <h2>Impact Stories</h2>
  <div className="story">
    <img src="school.png" alt="Community School Building" />
    <h2>Community School Building</h2>
    <p>Thanks to your generous donations, we've built a new school in a remote village, providing over 200 children with access to quality education.
      The construction of 20 new school buildings, set for 2022 and 2023, is part of a significant educational infrastructure development in Ireland. 
      This initiative, overseen by the National Development Finance Agency (NDFA) and announced by Minister for Education Norma Foley TD, targets areas experiencing 
      significant population growth across the country, including counties like Wicklow, Kilkenny, and Westmeath. The projects are organized into 
      three bundles: Project Nore, Project Boyne, and Project Dargle, and they aim to provide modern and sustainable infrastructure for the education sector​. 
      <a href="https://www.buildinginfo.com/upcoming-construction-projects/20-new-school-buildings-ireland-2022-2023/">Read more about this project.</a></p>
  </div>
  <br></br>
  <div className="story">
    <img src="Water.png" alt="Clean Water Well" />
    <h2>Community School Building</h2>
    <p>Water.org has significantly improved lives by providing millions of people with access to safe water and sanitation. Their efforts 
      have led to remarkable transformations, such as enabling Sapdiah from Indonesia to have more time for income-generating activities 
      instead of collecting water, and assisting Erenice in Brazil to repair her family's water well, thereby safeguarding their
      quality of life and livelihood 
      <a href="https://water.org/our-impact/all-stories/">Discover the full impact.</a></p>
  </div>
  <br></br>
  <div className="story">
    <img src="medical.png" alt="Medical Assistance" />
    <p>In Pennsylvania, Medical Assistance (MA), also known as Medicaid, pays for health care services for eligible individuals. 
      People can apply for MA in several ways, including online through the COMPASS website, by telephone, in-person at a county 
      assistance office (CAO), or on paper by downloading and sending an application to their local CAO. Assistance includes but 
      is not limited to physical health options, mental health/substance abuse services, and a variety of other healthcare needs. 
      Pennsylvania also provides information about providers accepting MA patients and has resources for those who may not be eligible 
      for MA but could benefit from other programs​
    <a href="https://www.dhs.pa.gov/services/assistance/pages/medical-assistance.aspx">Learn how to help.</a></p>
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
