import Tilt from 'react-parallax-tilt';

const Card = ({ url }) => {
  return (
    <Tilt>
      <div
        className="h-64 w-full"
        style={{
          background: `url(${url}) center/contain no-repeat`
        }}></div>
    </Tilt>
  );
};

export default Card;
