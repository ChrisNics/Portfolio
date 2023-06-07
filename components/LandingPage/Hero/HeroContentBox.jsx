import { TypeAnimation } from 'react-type-animation';

const HeroContentBox = () => {
  return (
    <div className="max-w-xs text-2xl md:max-w-lg md:text-4xl">
      <TypeAnimation
        sequence={[
          'Hi, my name is', // Types 'One'
          1000 // Waits 1s
        ]}
        wrapper="span"
        cursor={false}
        className="font-bold text-white"
      />{' '}
      <TypeAnimation
        sequence={[
          '', // Types 'One'
          1000, // Waits 1s
          'Christian Nicolas', // Deletes 'One' and types 'Two'
          2000 // Waits 2s
        ]}
        wrapper="span"
        cursor={false}
        className="font-bold text-orange-400"
      />
      <div className="mt-2 max-w-[200px] md:max-w-lg">
        <p className="font-bold text-white">
          I{' '}
          <TypeAnimation
            sequence={[
              'am Web Developer 👨‍💻', // Deletes 'One' and types 'Two'
              4000, // Waits 1s
              'enjoy playing the guitar. 🎸', // Types 'One'
              6000, // Waits 2s
              'am a fan of video games. 🎮 ', // Deletes 'One' and types 'Two'
              8000 // Waits 2s
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="font-bold text-orange-400"
          />
        </p>
      </div>
    </div>
  );
};

export default HeroContentBox;
