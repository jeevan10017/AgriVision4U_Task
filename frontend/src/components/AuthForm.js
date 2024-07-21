import React, { useState } from 'react';
import axios from 'axios';

const AuthForm = ({ type }) => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = type === 'register' ? '/api/auth/register' : '/api/auth/login';
        try {
            const res = await axios.post(url, formData);
            console.log(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {type === 'register' && <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />}
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
            <button type="submit">{type === 'register' ? 'Register' : 'Login'}</button>
        </form>
    );
};

export default AuthForm;
