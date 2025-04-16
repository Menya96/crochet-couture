import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export default function App({ Component, pageProps }: AppProps) {  
  return <main className={`${caveat.variable} font-caveat`}><Component {...pageProps} /></main>;
}
