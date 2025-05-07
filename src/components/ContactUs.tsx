import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa'; // Import the icons
import './contactUs.css'

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to an API)
    console.log('Form submitted:', formData);
    // You might want to add a success message or clear the form here
    setFormData({ name: '', email: '', message: '' }); // Clear form after submission
  };

  return (
    <div className="contact-us-container bg-primaryGreen py-4">
      <div className="container px-4 flex flex-col md:flex-row items-center justify-between">
        <div className='w-full md:w-1/2 flex flex-col items-center justify-center'>
          <h2 className="text-4xl text-accentGold font-bold text-center mb-4">Contact Us</h2>
          <h2 className="text-3xl text-accentGold font-bold text-center mb-6">How can we be of help?</h2>
          <p className='text-accentGold text-center mb-6 md:px-32'>
            Thank you for showing interest in our products.
            If you need to to get in touch with us please reach us by filling this form or through our social media handles listed below. we’ll try and get back to you as soon as possible.
          </p>
          <h2 className="text-3xl text-accentGold font-bold text-center mb-6">Working Hours</h2>
          <ul className="text-accentGold text-center text-xl mb-6">
            <li className='mb-4'>
              <b>Monday - Friday</b>
              <br/> 8:00 AM - 6:00 PM
            </li>
            <li className='mb-4'>
              <b>Saturday</b>
              <br/> 9:00 AM - 4:00 PM
            </li>
            <li className='mb-4'>
              <b>Sunday</b>
              <br/> 10:00 AM - 2:00 PM
            </li>
          </ul>
          <div className="flex justify-center space-x-6 mb-6">
            <div className="social-icon-container instagram">
              <FaInstagram className="text-accentGold text-3xl cursor-pointer" />
            </div>
            <div className="social-icon-container">
              <FaFacebook className="text-accentGold text-3xl cursor-pointer" />
            </div>
            <div className="social-icon-container">
              <FaTwitter className="text-accentGold text-3xl cursor-pointer" />
            </div>
            <div className="social-icon-container">
              <FaTiktok className="text-accentGold text-3xl cursor-pointer" />
            </div>
          </div>
        </div>
          
        <div className='w-full md:w-1/2 flex items-center justify-center'>
          <form onSubmit={handleSubmit} className="max-w-lg md:w-96 bg-accentGold p-8 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;