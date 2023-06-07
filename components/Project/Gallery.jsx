import Card from './Card';

const Gallery = ({ images }) => {
  return (
    <>
      <div className="flex flex-col gap-y-10">
        <h3>ScreenShots</h3>
        <div className={`grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-${images.length}`}>
          {images.map((image) => (
            <Card url={image} key={image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
