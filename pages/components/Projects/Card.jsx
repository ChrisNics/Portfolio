import Tilt from 'react-parallax-tilt';

const Card = () => {
  return (
    <Tilt>
      <div>
        <div className="flex justify-center text-white">
          <div className="flex flex-col gap-y-5">
            <h3 className="z-20 relative   text-xl font-bold after:bg-white after:mt-2 after:block after:w-32 after:h-1 after:content-['']">
              National <br /> Geographic <br />
              Learning
            </h3>
            <h5 className="text-neutral-500">00</h5>
          </div>

          <div>
            <div className="-ml-10 mt-10 h-28 w-36 bg-card bg-no-repeat bg-cover"></div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
