import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="container mx-auto px-7 py-2">
        <About />
      </div>
    </main>
  );
}
