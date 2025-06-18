import type { Route } from "./+types/home";
import Navbar from "app/components/Navbar"
import Hero from "app/components/Hero"
import Carou from "app/components/Carousel"
import Catalogue from "app/components/catalogue"
import Our from "app/components/Our"
import Program from "app/components/Program"
import Footer from "app/components/Footer"
import Testimonials from "app/components/testimonials"
import Photo from "app/components/photo"
import Article from "app/components/Article"
import Float from "app/components/Floating"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Float />
      <Navbar />
      <Hero />
      <Carou />
      <Catalogue />
      <Our />
      <Program />
      <Testimonials />
      <Photo />
      <Article />
      <Footer />
    </div>
  );
}
