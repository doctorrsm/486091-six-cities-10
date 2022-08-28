import React from 'react';

type Props = {
  images: string[]
};

function Gallery({images}: Props): JSX.Element{
  if (images.length > 6) {
    images = images.slice(0,6);
  }
  return (
    <div className="property__gallery">
      {images.map((image, index): JSX.Element => (
        <div className="property__image-wrapper" key={image}>
          <img className="property__image" src={image} alt="Property studio"/>
        </div>
      ))}
    </div>
  );
}

export default React.memo(Gallery);
