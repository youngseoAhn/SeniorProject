import React, { useState } from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer"

const ClientEnter = () => {
    const [client, setClient] = useState({
        firstName: '',
        lastName: '',
        birthday: '',
        address: '',
        neededservice: '' // 'servicesNeeded'를 'neededservice'로 변경
    });

    const [errorMessage, setErrorMessage] = useState(''); // 에러 메시지 상태 추가

    const handleChange = (e) => {
        setClient({...client, [e.target.name]: e.target.value});
        setErrorMessage(''); // 입력을 변경할 때 에러 메시지 초기화
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // 페이지 리로드 방지
        try {
            const response = await fetch('http://localhost:5000/clients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(client), // 상태 이름이 이미 변경되었으므로 이 부분은 수정할 필요 없음
            });
            if (response.ok) {
                // 성공적으로 데이터를 전송하면 어떤 동작을 할지 정의할 수 있습니다.
                console.log("Data saved successfully");
            } else {
                throw new Error('Failed to save data');
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <p>first name</p>
            <input type="text" name="firstName" value={client.firstName} onChange={handleChange}></input>
            <p>last name</p>
            <input type="text" name="lastName" value={client.lastName} onChange={handleChange}></input>
            <p>birthday</p>
            <input type="date" name="birthday" min="1900-01-01" max="2099-12-31" value={client.birthday} onChange={handleChange}></input>
            <p>address</p>
            <input type="text" name="address" value={client.address} onChange={handleChange}></input>
            <p>services needed</p>
            <input type="text" name="neededservice" value={client.neededservice} onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ClientEnter;