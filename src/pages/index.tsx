
import Navbar from "../components/Navbar";
import LandingPage from "../components/landingpage";
import Collections from "../components/Collections";
import AboutUs from "../components/AboutUs";

export default function Home() {
  return (
    <div className="font-caveat">
      <Navbar />
      <LandingPage />
      <Collections/>
      <AboutUs/>
    </div>
  );
}
