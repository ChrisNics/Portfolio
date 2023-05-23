import Tilt from 'react-parallax-tilt';

const Card = () => {
  return (
    <Tilt>
      <div className="text-white transition-all duration-100 hover:text-orange-600">
        <div className="flex justify-center">
          <div className="flex flex-col gap-y-5">
            <h3 className="relative z-20   text-xl font-bold after:mt-2 after:block after:h-1 after:w-32 after:bg-current after:content-['']">
              National <br /> Geographic <br />
              Learning
            </h3>
            <h5 className="text-neutral-500">00</h5>
          </div>

          <div>
            <div className="bg-card -ml-10 mt-10 h-28 w-36 bg-cover bg-no-repeat"></div>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default Card;
