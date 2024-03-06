import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Admin = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/AdminLogin');
        } else {
            fetchData();
        }
    }, [navigate]);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:5000/clients');
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error("Failed on loading the data", error);
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('en-CA', options);
    }

    return(
        <div>        
            <Header/>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Birthday</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{formatDate(item.birthday)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer/>
        </div>
    );
}

export default Admin;