import Tilt from 'react-parallax-tilt';
import slugify from 'slugify';
import Link from 'next/link';

const Card = ({ index, title, image }) => {
  return (
    <Tilt>
      <Link href={`/projects/${slugify(title, { lower: true })}`}>
        <div className="text-white transition-all duration-100 hover:text-orange-600">
          <div className="flex justify-center">
            <div className="flex max-w-[9rem] flex-col gap-y-5">
              <h3 className="relative z-20   text-xl font-bold after:mt-2 after:block after:h-1 after:w-32 after:bg-current after:content-['']">
                {title}
              </h3>
              <h5 className="text-neutral-500">0{index}</h5>
            </div>

            <div>
              <div
                className="-ml-10 mt-10 h-28 w-36"
                style={{
                  background: `linear-gradient(27deg, rgba(0,0,0,1) 0%, rgba(255,0,0,0) 100%), url(${image}) center/cover no-repeat`
                }}></div>
            </div>
          </div>
        </div>
      </Link>
    </Tilt>
  );
};

export default Card;
