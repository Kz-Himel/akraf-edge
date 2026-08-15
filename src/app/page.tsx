import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Expertise from "../components/Expertise";
import EdgeSection from "../components/EdgeSection";
import Approach from "../components/Approach";
import FeaturedWork from "../components/FeaturedWork";
import Impact from "../components/Impact";
import Insights from "../components/Insights";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Expertise />
        <EdgeSection />
        <Approach />
        <FeaturedWork />
        <Impact />
        <Insights />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}