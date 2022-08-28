import {Offer} from '../../types/offers';
import React from 'react';
import PlaceCard from '../place-card/place-card';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {CardTypes} from '../../const';
import {getActiveCardId} from '../../store/app-process/selectors';
import {changeActiveCardId} from '../../store/app-process/app-process';

type PlaceCardProps = {
  offers: Offer[],
  cardType: string
}

function PlaceCardList({offers, cardType}: PlaceCardProps): JSX.Element {

  const isCitiesCard = cardType === 'cities';
  const isNearPlaceCard = cardType === 'near-places';

  const dispatch = useAppDispatch();
  const activeCardId = useAppSelector(getActiveCardId);

  return (
    <>
      {isCitiesCard &&
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <PlaceCard
              offer={offer}
              key={offer.id}
              isActive={offer.id === activeCardId}
              onMouseOver={() => dispatch(changeActiveCardId(offer.id))}
              onMouseOut={() => dispatch(changeActiveCardId(0))}
              cardType={CardTypes.Cities}
            />
          ))}
        </div>}

      {isNearPlaceCard &&
        <div className='near-places__list places__list'>
          {offers.map((offer) => (
            <PlaceCard
              offer={offer}
              key={offer.id}
              isActive={offer.id === activeCardId}
              onMouseOver={() => dispatch(changeActiveCardId(offer.id))}
              onMouseOut={() => dispatch(changeActiveCardId(0))}
              cardType={CardTypes.NearPlaces}
            />
          ))}
        </div>}

    </>

  );
}

export default PlaceCardList;
