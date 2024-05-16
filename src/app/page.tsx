import Image from "next/image";
import Nabnar from "./components/Navbar";
import Background from "./components/Background";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Project from "./components/Projects";
import Team from "./components/Team";
import TeamMembers from "./components/TreamMembers"; // Corrected import name
import Contact from "./components/contact"; // Corrected import name
import Footer from "./components/Footer";
import Form from "./components/Form";
import Test from "./components/Test";
import EmailSection from "./components/EmailSection";

export default function Home() {
  return (
    <>
      <Nabnar />
      <Background />
      <Hero />
      <Skills />
      <Team />
      <Project />
      <Contact /> {/* Corrected component name */}
      <Test />
      <Footer />
    </>
  );
}
