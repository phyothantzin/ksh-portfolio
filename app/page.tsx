import Bio from "./components/Bio";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Education from "./components/Education";
import FeaturedWork from "./components/FeaturedWork";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Quote from "./components/Quote";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col overflow-hidden">
      <Hero />
      <div className="container mx-auto px-4">
        <Bio />
        <FeaturedWork />
        <Education />
        <Contact />
      </div>
      {/* <Quote /> */}
      {/* <div className="container mx-auto px-4">
        <Certificate />
      </div>
      */}
      <Footer />
    </main>
  );
}
