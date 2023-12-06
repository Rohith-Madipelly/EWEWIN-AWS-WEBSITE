import React from 'react'
import axios from "axios";
import { BASE_URL } from "../Enviornment";

export const RegisterAPI = async (userName, email, PhoneNumber,Gender,password) => {
    const formData = new FormData();
    formData.append("Name", userName);
    formData.append("Email", email);
    formData.append("Phone_Number", PhoneNumber);
    formData.append("Gender", Gender);
    formData.append("Password", password);

    return await axios.post(`${BASE_URL}register`, formData);
};