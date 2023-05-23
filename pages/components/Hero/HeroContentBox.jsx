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
        className="text-2xl font-bold text-white"
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
        className="text-2xl font-bold text-orange-400"
      />
      <div className="mt-2 max-w-[200px]">
        <p className="text-2xl font-bold text-white">
          I <span className="font-light italic">love</span>{' '}
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
            className="text-2xl font-bold text-orange-400"
          />
        </p>
      </div>
      <div className="mt-5">
        <p className="text-2xl font-light text-gray-400">Let me show you...</p>
      </div>
    </div>
  );
};

export default HeroContentBox;
