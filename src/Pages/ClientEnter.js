import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import './ClientEnter.css';
import { useNavigate } from "react-router-dom";

const ClientEnter = () => {
    let navigate = useNavigate();

    function navigateToSubmitted() {
        navigate('/Submitted');
    }

    function navigateToEntered() {
        navigate('/UserEntered');
    }

    const [client, setClient] = useState({
        firstName: '',
        lastName: '',
        birthday: '',
        address: '',
        services: {
            careerDevelopment: false,
            mentalHealth: false,
            substanceIssues: false,
            generalHealth: false
        }
    });

    const [photo, setPhoto] = useState(null);
    const [errorMessage, setErrorMessage] = useState(''); 

    const handleChange = (e) => {
        if (e.target.name === "clientPhoto") {
            setPhoto(e.target.files[0]);
        } else if (e.target.type === "checkbox") {
            const { name, checked } = e.target;
            setClient(prevState => ({
                ...prevState,
                services: {...prevState.services, [name]: checked}
            }));
        } else {
            setClient({...client, [e.target.name]: e.target.value});
        }
        setErrorMessage(''); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); 

        if (!client.firstName || !client.lastName || !client.address) {
            setErrorMessage("Please fill out all required fields.");
            return;
        }

        const formData = new FormData();
        for (const key in client) {
            if (key !== "services") {
                formData.append(key, client[key]);
            } else {
                for (const service in client.services) {
                    formData.append(service, client.services[service]);
                }
            }
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
                setErrorMessage("");
                navigateToSubmitted();
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
                    <p className="signupTitle">Register to Safe Space</p>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <div className="Names">
                        <p className="signupNames">Firstname</p>
                        <input type="text" name="firstName" value={client.firstName} onChange={handleChange} className="nameBox"></input>
                    </div>
                    <div className="Names">
                        <p className="signupNames">LastName</p>
                        <input type="text" name="lastName" value={client.lastName} onChange={handleChange} className="nameBox"></input>
                    </div>
                    <div className="BirthdaysContainer">
                        <p className="signupBirthday">Birthday</p>
                        <input type="date" name="birthday" min="1900-01-01" max="2099-12-31" value={client.birthday} onChange={handleChange} className="nameBox"></input>
                    </div>
                    <div className="Names">
                         <p className="signupNames">Address</p>
                         <input type="text" name="address" value={client.address} onChange={handleChange} className="nameBox"></input>
                    </div>
                    <div className="Names">
                       <p className="signupNames">Photo</p>
                       <input type="file" name="clientPhoto" onChange={handleChange} className="photoBox"></input><br/>
                    </div>
                    <p className="signupServices">Services Needed</p>
                    <label htmlFor="careerDevelopment">Career Development</label>
                    <input type="checkbox" id="careerDevelopment" name="careerDevelopment" checked={client.services.careerDevelopment} onChange={handleChange} /><br/>

                    <label htmlFor="mentalHealth">Mental Health</label>
                    <input type="checkbox" id="mentalHealth" name="mentalHealth" checked={client.services.mentalHealth} onChange={handleChange} /><br/>

                    <label htmlFor="substanceIssues">Substance Issues</label>
                    <input type="checkbox" id="substanceIssues" name="substanceIssues" checked={client.services.substanceIssues} onChange={handleChange} /><br/>

                    <label htmlFor="generalHealth">General Health</label>
                    <input type="checkbox" id="generalHealth" name="generalHealth" checked={client.services.generalHealth} onChange={handleChange} /><br/>

                    <button type="submit">Submit</button>
                </div>
            </form>
            <Footer/>
        </div>
    );
}

export default ClientEnter;