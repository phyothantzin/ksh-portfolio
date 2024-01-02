import Bio from "./components/Bio";
import Certificate from "./components/Certificate";
import FeatureWork from "./components/FeatureWork";
import Hero from "./components/Hero";
import Quote from "./components/Quote";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto px-4">
        <Bio />
        <FeatureWork />
      </div>
      <Quote />
      <div className="container mx-auto px-4">
        <Certificate />
      </div>
    </main>
  );
}
