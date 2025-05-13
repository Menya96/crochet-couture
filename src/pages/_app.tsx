import "@/styles/globals.css";
import { useEffect, useState } from 'react';
import type { AppProps } from "next/app";
import { Caveat } from "next/font/google";
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../utils/firebase'; // Assuming you have your firebase auth initialized here

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export default function App({ Component, pageProps }: AppProps) {  
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    // You might show a loading spinner or splash screen
    return <p>Loading...</p>;
  }

  return <main className={`${caveat.variable} font-caveat`}><Component {...pageProps} currentUser={currentUser} /></main>;
}
