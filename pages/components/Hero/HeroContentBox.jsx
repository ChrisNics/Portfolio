import { TypeAnimation } from 'react-type-animation';

const HeroContentBox = () => {
  return (
    <div className="max-w-xs">
      <TypeAnimation
        sequence={[
          'Hi, my name is', // Types 'One'
          1000 // Waits 1s
        ]}
        wrapper="span"
        cursor={false}
        className="text-white text-2xl font-bold"
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
        className="text-orange-400 text-2xl font-bold"
      />
      <div className="max-w-[200px] mt-2">
        <p className="text-white text-2xl font-bold">
          I <span className="italic font-light">love</span>{' '}
          <TypeAnimation
            sequence={[
              'to play a guitar 🎸', // Types 'One'
              4000, // Waits 1s
              'to code 👨‍💻', // Deletes 'One' and types 'Two'
              6000, // Waits 2s
              'to play video games 🎮 ', // Deletes 'One' and types 'Two'
              8000 // Waits 2s
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-orange-400 text-2xl font-bold"
          />
        </p>
      </div>
      <div className="mt-5">
        <p className="text-gray-400 text-2xl font-light">Let me show you...</p>
      </div>
    </div>
  );
};

export default HeroContentBox;
