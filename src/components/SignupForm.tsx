import React, { useState, useEffect } from 'react';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from 'firebase/auth';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Clear previous errors
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({
        'login_hint': 'user@example.com'
      });
      await createUserWithEmailAndPassword(auth, email, password);
      // Optionally, redirect the user or show a success message
      setEmail('');
      setPassword('');
    } catch (error: any) {
      if (error.code === 'auth/weak-password') {
        setError("Your password is too weak. Please choose a stronger password with at least 6 characters, including a mix of uppercase and lowercase letters, numbers, and symbols.");
      } else {
        setError(error.message);
      }
    }
  };

  const handleGoogleSignIn = async () => {
    setError(null); // Clear previous errors
    try {
      const provider = new GoogleAuthProvider(); // Ensure provider is defined here as well
      await signInWithRedirect(auth, provider);
      // Optionally, redirect the user or show a success message
      console.log('User signed in with Google successfully!');
    } catch (error: any) {
      console.error('Error signing in with Google:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          // User signed in with Google successfully after redirect
          console.log('User signed in with Google successfully after redirect!');
          // You can access user info via result.user
          // TODO: Add redirection logic here
          // Optionally, redirect the user to a different page
        }
      } catch (error: any) {
        console.error('Error signing in with Google after redirect:', error);
        setError(error.message);
      }};
    handleRedirectResult();
  }, []); // Empty dependency array means this effect runs once on mount


  return (
    <form onSubmit={handleSubmit} className='w-full h-80 flex flex-col items-center justify-center bg-accentGold'>
      <div className='flex flex-col items-start'>
        <label htmlFor="email" className='text-xl text-left font-bold text-primaryGreen m-2'>Email:</label>
        <input
          className='border border-secondaryBrown rounded-md p-2 w-64 focus:border-dotted focus:outline-none'
          type="email"
          id="email"
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className='flex flex-col items-start'>
        <label htmlFor="password" className='text-xl text-left font-bold text-primaryGreen m-2' >Password:</label>
        <input
          className='border border-secondaryBrown rounded-md p-2 w-64 focus:border-dotted focus:outline-none'
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button 
      type="submit"
      className="mt-4 bg-primaryGreen text-accentGold hover:scale-105 py-2 px-4 rounded flex items-center justify-center hover:bg-secondaryBrown transition-all duration-300 ease-in-out"
      >SIGN UP</button>
      {error && (
 <p className="text-red-500 text-center max-w-xs mt-2 px-4">{error}</p>
      )}
      <button
        onClick={handleGoogleSignIn}
        className="mt-4 bg-white text-gray-800 hover:scale-105 py-2 px-4 rounded flex items-center justify-center hover:bg-gray-100 transition-all duration-300 ease-in-out border border-gray-300"
        type="button" // Important to prevent form submission
      >Sign in with Google</button>
    </form>
  );
};

export default SignupForm;