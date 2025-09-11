import AboutUs from "./components/homepage/AboutUs";
import Hero from "./components/homepage/Hero";
import Tagline from "./components/homepage/Tagline";

export default function Home() {
  return (
    <main className="font-inter">
      <Hero />
      <AboutUs />
      <Tagline />
    </main>
  );
}
