import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import './ClientEnter.css';

const ClientEnter = () => {
    const [client, setClient] = useState({
        firstName: '',
        lastName: '',
        birthday: '',
        address: '',
        neededservice: ''
    });

    const [photo, setPhoto] = useState(null);
    const [errorMessage, setErrorMessage] = useState(''); 

    const handleChange = (e) => {
        if (e.target.name === "clientPhoto") {
            setPhoto(e.target.files[0]);
        } else {
            setClient({...client, [e.target.name]: e.target.value});
        }
        setErrorMessage(''); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const formData = new FormData();
        for (const key in client) {
            formData.append(key, client[key]);
        }

        if (photo) {
            formData.append("clientPhoto", photo)
        }
        try {
            const response = await fetch('http://localhost:5000/clients', {
                method: 'POST',
                body: formData, 
            });
            if (response.ok) {
                
                console.log("Data saved successfully");
            } else {
                throw new Error('Failed to save data');
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <Header/>
            <form onSubmit={handleSubmit}>
                <div className="enterBox">
                    <p className="signupTitle">Sign Up</p>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <p className="signupNames">first name</p>
                    <input type="text" name="firstName" value={client.firstName} onChange={handleChange}></input>
                    <p className="signupNames">last name</p>
                    <input type="text" name="lastName" value={client.lastName} onChange={handleChange}></input>
                    <p className="signupNames">birthday</p>
                    <input type="date" name="birthday" min="1900-01-01" max="2099-12-31" value={client.birthday} onChange={handleChange}></input>
                    <p className="signupNames">address</p>
                    <input type="text" name="address" value={client.address} onChange={handleChange}></input>
                    <p className="signupNames">services needed</p>
                    <input type="text" name="neededservice" value={client.neededservice} onChange={handleChange}></input>
                    <br/>
                    <input type="file" name="clientPhoto" onChange={handleChange}></input><br/>
                    <button type="submit">Submit</button>
                </div>
            </form>
            <Footer/>
        </div>
    );
}

export default ClientEnter;