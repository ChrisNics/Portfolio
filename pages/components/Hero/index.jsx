import AbsoluteSocialMedia from './AbsoluteSocialMedia';
import HeroContentBox from './HeroContentBox';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container mx-auto relative">
        <AbsoluteSocialMedia />

        <div className="pt-40 flex justify-center">
          <HeroContentBox />
        </div>
      </div>
    </section>
  );
};

export default Hero;
