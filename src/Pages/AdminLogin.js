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
                    username: loginInfo.adminID, // 'adminID' 대신 'username' 사용
                    password: loginInfo.adminPassword // 'adminPassword' 대신 'password' 사용
                }),
            });
            if (response.ok) {
                const data = await response.json();
                console.log('로그인 성공:', data);
                navigate('/Admin'); 
            } else {
                console.error('로그인 실패');
            }
        } catch (error) {
            console.error('서버 에러:', error);
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
                <button type="submit">로그인</button>
            </form>
            <Footer />
        </div>
    );
};

export default AdminLogin;
