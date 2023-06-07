import AbsoluteSocialMedia from './AbsoluteSocialMedia';
import HeroContentBox from './HeroContentBox';

const Hero = () => {
  return (
    <section id="hero">
      <div className="container relative mx-auto flex  min-h-screen items-center justify-center">
        <AbsoluteSocialMedia />

        <div className="flex justify-center">
          <HeroContentBox />
        </div>
      </div>
    </section>
  );
};

export default Hero;
