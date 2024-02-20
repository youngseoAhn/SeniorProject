import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";


const UserEntered = () => {
    return (
        <div>
            <Header/>
            <p className="registerMessage">Thank you for register to Safe Space!<br/>We will assist you shortly.</p>
            <Footer/>
        </div>
    );
}

export default UserEntered;