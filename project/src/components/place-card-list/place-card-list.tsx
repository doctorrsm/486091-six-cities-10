import {Offer} from '../../types/offers';
import React from 'react';
import PlaceCard from '../place-card/place-card';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {setHoveredCard} from '../../store/action';
import {CardTypes} from '../../const';

type PlaceCardProps = {
  offers: Offer[],
  cardType: string
}

function PlaceCardList({offers, cardType}: PlaceCardProps): JSX.Element {

  const isCitiesCard = cardType === 'cities';
  const isFavoritesCard = cardType === 'favorites';
  const isNearPlaceCard = cardType === 'near-places';

  const dispatch = useAppDispatch();
  const activeCardId = useAppSelector((state) => state.activeCardId);

  return (
    <>
      {isCitiesCard &&
        <div className="cities__places-list places__list tabs__content">
          {offers.map((offer) => (
            <PlaceCard
              offer={offer}
              key={offer.id}
              isActive={offer.id === activeCardId}
              onMouseOver={() => dispatch(setHoveredCard(offer.id))}
              onMouseOut={() => dispatch(setHoveredCard(0))}
              cardType={CardTypes.Cities}
            />
          ))}
        </div>}

      {isFavoritesCard &&
        <ul className="favorites__list">
          {/*{*/}
          {/*  Cities.map((city) => (<FavoritesListItem offers={offers} key={city.name} city={city.name} />))*/}
          {/*}*/}
        </ul>}

      {isNearPlaceCard &&
        <div className='near-places__list places__list'>
          {offers.map((offer) => (
            <PlaceCard
              offer={offer}
              key={offer.id}
              isActive={offer.id === activeCardId}
              onMouseOver={() => dispatch(setHoveredCard(offer.id))}
              onMouseOut={() => dispatch(setHoveredCard(0))}
              cardType={CardTypes.NearPlaces}
            />
          ))}
        </div>}

    </>

  );
}

export default PlaceCardList;
