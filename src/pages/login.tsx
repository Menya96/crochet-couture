import React, { useState } from 'react';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', { email, password });
    // You would typically call an authentication API or service here
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-accentGold">
      <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col bg-accentGold p-8 rounded shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-primaryGreen">Log In</h2>
        <div className="mb-4 flex flex-col items-start">
            <label htmlFor="email" className='text-xl text-left font-bold text-primaryGreen m-2'>
              Email:
            </label>
            <input
              className='border border-secondaryBrown rounded-md p-2 w-64 focus:border-dotted focus:outline-none'
              type="email"
              placeholder='email'
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
        </div>
        <div className="mb-4 flex flex-col items-start">
          <label htmlFor="password" className="text-xl text-left font-bold text-primaryGreen m-2">
            Password:
          </label>
          <input
            className='border border-secondaryBrown rounded-md p-2 w-64 focus:border-dotted focus:outline-none'
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="mt-4 bg-primaryGreen text-accentGold hover:scale-105 hover:shadow-lg py-2 px-4 rounded flex items-center justify-center transition-all duration-300 ease-in-out"
            type="submit"
          >
          Log In
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;