import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const MyRequest = () => {

    const [formData, setFormData] = useState({
        RequestNo:'',
        Company:'',
        District:'',
        RequestType:'',
        Email:'',
        MobileNo:'',
        EntryDate:'',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("http://localhost:5228/api/NewConnection", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Data submitted successfully');
                console.log('Data submitted successfully');
            } else {
                console.error('Error submitting data');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        backgroundColor:'#FFE7E7',
    };

    const thStyle = {
        border: '1px solid grey',
        padding: '8px',
        textAlign: 'left',
        backgroundColor:'#FFA2A2'
    };

    const tdStyle = {
        border: '1px solid grey',
        padding: '8px',
        textAlign: 'left',
    };
    return (
        <div>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={thStyle}>Request No</th>
                        <th style={thStyle}>Company</th>
                        <th style={thStyle}>District</th>
                        <th style={thStyle}>Request Type</th>
                        <th style={thStyle}>Name</th>
                        <th style={thStyle}>Email Id</th>
                        <th style={thStyle}>Mobile No</th>
                        <th style={thStyle}>Entry Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={tdStyle}>R251020230119</td>
                        <td style={tdStyle}></td>
                        <td style={tdStyle}></td>
                        <td style={tdStyle}></td>
                        <td style={tdStyle}></td>
                        <td style={tdStyle}></td>
                        <td style={tdStyle}></td>
                        <td style={tdStyle}></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyRequest;






