import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Admin.css";

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
            <div className="TableContainer">
              <table className="tableItself">
                    <thead className="tabletTop">
                        <tr>
                            <th className="tableTopContent">First Name</th>
                            <th className="tableTopContent">Last Name</th>
                            <th className="tableTopContent">Birthday</th>
                        </tr>
                    </thead>
                    <tbody className="tableBody">
                        {data.map((item, index) => (
                            <tr key={index} className="tableBodyContent">
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{formatDate(item.birthday)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer/>
        </div>
    );
}

export default Admin;