import Bio from "@/app/components/Bio";
import Contact from "@/app/components/Contact";
import Education from "@/app/components/Education";
import FeaturedWork from "@/app/components/FeaturedWork";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "./components/nav/Navbar";
// import Quote from "./components/Quote";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col overflow-hidden">
        <Navbar visibleDefault={false} fixed={true} />
        <Hero />
        <div className="container mx-auto px-4">
          <Bio />
          <FeaturedWork />
          <Education />
          <Contact />
        </div>
        <Footer />
      </main>
    </>
  );
}
