type Props = {
  images: string[]
};

function Gallery({images}: Props): JSX.Element{
  return (
    <div className="property__gallery">
      {images.map((image, index): JSX.Element => (
        <div className="property__image-wrapper" key={image}>
          <img className="property__image" src={image} alt="Photo studio"/>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
