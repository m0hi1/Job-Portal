import React, { useState } from 'react'
import logo from '../assets/images/logo.png'

const Bottombar = () => {
  const [email, setEmail] = useState('');
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic (e.g., send email to API)
    alert(`Subscribed with: ${email}`);
    setEmail('');
  }

  return (
    <footer className='bg-indigo-700 border-t border-indigo-500'>
      <div className='mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Logo and About */}
          <div className='flex flex-col items-start'>
            <a className='flex items-center mb-4' href="/index.html">
              <img className='h-8 w-auto' src={logo} alt="React Jobs" />
              <span className='text-white text-2xl font-bold ml-2'>React Jobs</span>
            </a>
            <p className='text-gray-300'>
              React Jobs is a platform connecting talented developers with leading companies in the tech industry.
            </p>
          </div>

          {/* Social Media Links */}
          <div className='flex flex-col items-start'>
            <h4 className='text-white text-lg font-semibold mb-4'>Follow Us</h4>
            <div className='flex space-x-4'>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className='text-gray-300 hover:text-white transition-colors duration-300'>
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className='text-gray-300 hover:text-white transition-colors duration-300'>
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className='text-gray-300 hover:text-white transition-colors duration-300'>
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className='text-gray-300 hover:text-white transition-colors duration-300'>
                <i className="fab fa-github fa-2x"></i>
              </a>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className='flex flex-col items-start'>
            <h4 className='text-white text-lg font-semibold mb-4'>Subscribe to Our Newsletter</h4>
            <form onSubmit={handleSubscribe} className='w-full'>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='w-full p-2 rounded-md border border-indigo-500 focus:ring-2 focus:ring-indigo-400 focus:outline-none mb-4'
                required
              />
              <button type='submit' className='w-full bg-black text-white hover:bg-gray-900 py-2 rounded-md transition-colors duration-300'>
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className='mt-8 flex justify-center space-x-6'>
          <a
            href="/about.html"
            className='text-white hover:text-gray-200 rounded-md px-3 py-2 transition-colors duration-300'>
            About Us
          </a>
          <a
            href="/contact.html"
            className='text-white hover:text-gray-200 rounded-md px-3 py-2 transition-colors duration-300'>
            Contact
          </a>
          <a
            href="/privacy.html"
            className='text-white hover:text-gray-200 rounded-md px-3 py-2 transition-colors duration-300'>
            Privacy Policy
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='bg-indigo-800 py-4'>
        <div className='text-center text-white text-sm'>
          &copy; {new Date().getFullYear()} React Jobs. All rights reserved.
        </div>
      </div>
    </footer>
  )
};
export default Bottombar;
