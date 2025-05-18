import React, { useState, useEffect } from 'react';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithRedirect, GoogleAuthProvider, getRedirectResult } from 'firebase/auth';
import { useRouter } from 'next/router';

const SignupForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return; // Prevent form submission if passwords don't match
    }

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
      setConfirmPassword('');
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

    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          // User signed in with Google successfully after redirect
          console.log('User signed in with Google successfully after redirect!');
          router.push('/'); // TODO: Replace with actual redirect path
          // Optionally, redirect the user to a different page
        }
      } catch (error: any) {
        console.error('Error signing in with Google after redirect:', error);
        setError(error.message);
      }
    };
 useEffect(() => {
    handleRedirectResult();
  }, []); // Empty dependency array means this effect runs once on mount


  return (
    <div className="flex justify-center items-center min-h-screen bg-accentGold">
       <form onSubmit={handleSubmit} className='"bg-accentGold p-8 rounded shadow-xl flex justify-center items-center flex-col'>
            <div className='flex flex-col items-start'>
              <label htmlFor="email" className='text-xl text-left font-bold text-primaryGreen m-2'>
              Email:
              </label>
              <input
                className='border border-secondaryBrown rounded-md p-2 w-64 focus:border-dotted focus:outline-none'
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='flex flex-col items-start relative'>
              <label htmlFor="password" className='text-xl text-left font-bold text-primaryGreen m-2' >Password:</label>
              <input
                className='border border-secondaryBrown rounded-md p-2 w-64 focus:border-dotted focus:outline-none'
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-2 top-8"
                title={showPassword ? 'Hide password' : 'Show password'}
              >
                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {showPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.958 9.958 0 011.563-2.75M10.5 7a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm9.375 1.625A10.05 10.05 0 0112 5c-4.478 0-8.268 2.943-9.543 7a10.025 10.025 0 001.563 2.75m4.994-3.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  )}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
            <div className='flex flex-col items-start relative'>
              <label htmlFor="confirm-password" className='text-xl text-left font-bold text-primaryGreen m-2' >Confirm Password:</label>
              <input
                className='border border-secondaryBrown rounded-md p-2 w-64 focus:border-dotted focus:outline-none'
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (password !== e.target.value) {
                              setError("Passwords do not match.");
                } else {
                setError(null);
                }
                }}

                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center px-2 top-8"
                title={showConfirmPassword ? 'Hide password' : 'Show password'}
              >
                <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {showConfirmPassword ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.958 9.958 0 011.563-2.75M10.5 7a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm9.375 1.625A10.05 10.05 0 0112 5c-4.478 0-8.268 2.943-9.543 7a10.025 10.025 0 001.563 2.75m4.994-3.75a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  )}
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>


            <button 
            type="submit"
            className="mt-4 bg-primaryGreen text-accentGold hover:scale-105 py-2 px-4 rounded flex items-center justify-center transition-all duration-300 ease-in-out"
            >SIGN UP</button>
            {error && (
            <p className="text-red-500 text-center max-w-xs mt-2 px-4">{error}</p>
            )}
            <button
              onClick={handleGoogleSignIn}
              className="mt-4 bg-primaryGreen text-accentGold hover:scale-105 py-2 px-4 rounded flex items-center justify-center transition-all duration-300 ease-in-out"
              type="button" // Important to prevent form submission
            >Sign in with Google</button>
            <p className="mt-4 text-sm text-gray-600">
              Already have an account?{' '}
              <button onClick={() => router.push('/login')} type="button" className="text-primaryGreen text-xm font-bold hover:underline focus:outline-none">Log In</button>
            </p>

       </form>
    </div>
   
  );
};

export default SignupForm;