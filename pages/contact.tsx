import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div>
      <Navbar />
      <h1>Contact Us</h1>
      <p>Please fill out the form below to get in touch with us.</p>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button type="submit">Send Message</button>
      </form>
      <Footer />
    </div>
  );
}
