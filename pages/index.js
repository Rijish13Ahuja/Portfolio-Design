import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <TechStack />
      <Contact />
    </div>
  );
}
