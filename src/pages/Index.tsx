import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Blog from "@/components/sections/Blog";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Index() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        {/* <Testimonials /> */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
