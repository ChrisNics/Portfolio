import Header from '@/components/Header';
import Footer from '@/components/LandingPage/Footer';
import Hero from '@/components/LandingPage/Hero';
import Projects from '@/components/LandingPage/Projects';
import About from '@/components/LandingPage/About';

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
