import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-black">
        <Header />
        <Hero />
      </div>
      <Projects />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
