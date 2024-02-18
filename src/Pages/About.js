import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            <Header />
            <div className="about-content">
                <h1 className="main-heading">About Safe Space</h1>

                <h2 id="missiontitle">Our Mission</h2>
                <section className="mission-section">
                    <div className="mission-content">
                        <p className="sidewords">
                            Safe Space is a compassionate homeless shelter dedicated to providing a secure and warm haven for individuals of all genders and ages. Our mission extends beyond temporary accommodation. We are committed to supporting personalized future planning, assisting each person in laying the foundation for rebuilding their lives.
                        </p>
                        <img src="shelter-building.png" alt="SafeSpace Building" className="shelterbuilding"/>
                    </div>
                </section>

                <h2 id="servicestitle">Our Services</h2>
                <section className="services-section">
                    <div className="services-content">
                    <ul>
                        <li>Safe and secure temporary accommodation</li>
                        <li>Personalized future planning assistance</li>
                        <li>Access to mental health support services</li>
                        <li>Career development programs</li>
                        <li>Emergency contacts and resources</li>
                        <li>Donation programs for community involvement</li>
                    </ul></div>
                </section>

                <h2 id="boardtitle">Our Board Members</h2>
                <section className="board-members-section">
                    <div className="board-members">
                        <div className="board-member">
                            <h3 id="member-name">Board Chair - William</h3>
                            <img src="default_image_board.jpg" alt="Board Chair" className="board-member-image" />
                            <p className="board-member-bio">
                                As the Board Chair of Safe Space, William is a dedicated leader with a passion for creating positive change in the lives of individuals facing homelessness. William brings years of experience in community service and is committed to ensuring Safe Space remains a beacon of hope for those in need.
                            </p>
                        </div>
                        <div className="board-member">
                            <h3 id="member-name">Board Vice-Chair - John</h3>
                            <img src="default_image_board.jpg" alt="Board Vice-Chair" className="board-member-image" />
                            <p className="board-member-bio">
                                Serving as the Board Vice-Chair, John is a compassionate advocate for the homeless community. With a background in social work, John strives to contribute innovative ideas and solutions to address the challenges faced by individuals seeking refuge at Safe Space.
                            </p>
                        </div>
                        <div className="board-member">
                            <h3 id="member-name">Board Treasurer - Mary</h3>
                            <img src="default_image_board.jpg" alt="Board Treasurer" className="board-member-image" />
                            <p className="board-member-bio">
                                In the role of Board Treasurer, Mary is a financial expert committed to ensuring the fiscal responsibility and sustainability of Safe Space. With a strong belief in transparency and accountability, Mary brings financial acumen to support the organization's mission.
                            </p>
                        </div>
                        <div className="board-member">
                            <h3 id="member-name">Board Secretary - Emily</h3>
                            <img src="default_image_board.jpg" alt="Board Secretary" className="board-member-image" />
                            <p className="board-member-bio">
                                Emily serves as the Board Secretary, overseeing administrative matters with diligence and dedication. With a background in organizational management, Emily contributes organizational skills to ensure the smooth functioning of Safe Space and its mission.
                            </p>
                        </div>
                    </div>
                </section>

                <h2 id="partnershipstitle">Community Partnerships</h2>
                <section className="partnerships-section">
                    <div className="partnerships-content">
                    <p>
                        We believe in the strength of community partnerships. Safe Space collaborates with local businesses, organizations, and volunteers to enhance our impact and extend our reach. Together, we strive to create a supportive environment for those in need.
                    </p></div>
                </section>

                <h2 id="contacttitle">Contact Us</h2>
                <section className="contact-section">
                    <div className="contact-content">
                    <p>
                        If you have any questions, inquiries, or if you'd like to get involved, please feel free to reach out to us. Your support is invaluable in creating a Safe Space for everyone.
                    </p></div>
                    {/* Add your contact form or additional contact details here */}
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default About;
