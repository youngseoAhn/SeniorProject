import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const AdminLogin = () => {
    let navigate = useNavigate();
    const [loginInfo, setLogin] = useState({
        adminID: '',
        adminPassword: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLogin(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: loginInfo.adminID,
                    password: loginInfo.adminPassword
                }),
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Login Complete:', data);
                localStorage.setItem('token', data.token);
                navigate('/Admin');
            } else {
                console.error('Login Failed');
            }
        } catch (error) {
            console.error('Server: Error:', error);
        }
    };

    return (
        <div>
            <Header />
            <form className="AdminLogin" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="adminID"
                    value={loginInfo.adminID}
                    onChange={handleChange}
                    placeholder="Admin ID"
                />
                <input
                    type="password"
                    name="adminPassword"
                    value={loginInfo.adminPassword}
                    onChange={handleChange}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
            <Footer />
        </div>
    );
};

export default AdminLogin;
