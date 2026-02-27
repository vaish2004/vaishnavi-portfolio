import { ThemeProvider, useTheme } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import "./styles/global.css";
import Projects from "./components/Projects/Projects";
import AISection from "./components/AISection/AISection";
import Contact from "./components/Contact/Contact";
import Architecture from "./components/Architecture/Architecture";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.bg,
        color: theme.text,
        minHeight: "100vh",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <AISection />
        <Architecture />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}