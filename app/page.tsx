import Bio from "./components/Bio";
import FeatureWork from "./components/FeatureWork";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <Bio />
        <FeatureWork />
      </div>
    </main>
  );
}
