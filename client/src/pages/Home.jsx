import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import LeadForm from "../components/LeadForm";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <LeadForm />
      <Footer />
    </>
  );
}

export default Home;