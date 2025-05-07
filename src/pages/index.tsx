
import Navbar from "../components/Navbar";
import LandingPage from "../components/landingpage";
import Collections from "../components/Collections";
import AboutUs from "../components/AboutUs";
import FAQ from "../components/FAQ";
import { sampleFAQs } from "../components/FAQ";

export default function Home() {
  return (
    <div className="font-caveat">
      <Navbar />
      <LandingPage />
      <Collections/>
      <AboutUs/>
      <FAQ
        items={sampleFAQs}
      />
    </div>
  );
}
