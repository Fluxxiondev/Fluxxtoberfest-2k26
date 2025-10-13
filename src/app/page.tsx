import Nav from "./components/Nav";
import Hero from "./components/Hero";

export default function HomePage() {
  return (
    <main className="bg-[#f8fafc] text-black min-h-screen">
      <Nav />
      <Hero />
    </main>
  );
}
