// components/ContactForm.tsx
"use client"
import React, { useState } from 'react';
import axios from 'axios'; // For making HTTP requests

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/sendEmail', formData);
      console.log('Email sent successfully:', response.data.message);
      // Reset form fields
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
     console.error('Failed to send email:', error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />

      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactForm;
