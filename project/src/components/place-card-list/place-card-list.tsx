import {Offer} from '../../types/offers';
import React, {useState} from 'react';
import PlaceCard from '../place-card/place-card';
import {cityList} from '../../const';
import FavoritesListItem from '../favorites-list-item/favorites-list-item';

type PlaceCardProps = {
  offers: Offer[],
  cardType: string
}

function PlaceCardList({offers, cardType}: PlaceCardProps): JSX.Element {

  const isCitiesCard = cardType === 'cities';
  const isFavoritesCard = cardType === 'favorites';
  const isNearPlaceCard = cardType === 'near-places';

  const [activeCardId, setActiveCardId] = useState(0);

  return (
    <>
      {isCitiesCard &&
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <PlaceCard
              offer={offer}
              key={offer.id}
              isActive={offer.id === activeCardId}
              onMouseOver={() => {
                setActiveCardId(offer.id);
              }}
              onMouseOut={() => setActiveCardId(0)}
            />
          ))}
        </div>}

      {isFavoritesCard &&
        <ul className="favorites__list">
          {
            cityList.map((cityName) => (<FavoritesListItem offers={offers} key={cityName} city={cityName} />))
          }
        </ul>}

      {isNearPlaceCard &&
        <div className='near-places__list places__list'>
          {offers.map((offer) => (
            <PlaceCard
              offer={offer}
              key={offer.id}
              isActive={offer.id === activeCardId}
              onMouseOver={() => {
                setActiveCardId(offer.id);
              }}
              onMouseOut={() => setActiveCardId(0)}
            />
          ))}
        </div>}

    </>

  );
}

export default PlaceCardList;
