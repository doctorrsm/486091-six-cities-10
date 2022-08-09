import {Link, NavLink} from 'react-router-dom';
import { generatePath } from 'react-router';

import {Offer} from '../../types/offers';
import {capitalizeFirstLetter, renderPremiumLabel} from '../../tools/tools';
import Rating from '../rating/rating';
import {AppRoute, cardClassNames} from '../../const';
import React from 'react';

type Props = {
  offer: Offer;
  isActive: boolean;
  onMouseOver?: () => void;
  onMouseOut?:() => void;
  cardType?: string;
}

function PlaceCard({offer, isActive, onMouseOver, onMouseOut, cardType = 'cities'}: Props): JSX.Element {
  const activeCardClassName = 'place-card_active';
  const isFavoritesCard = cardType === 'favorites';
  return (
    <article
      className={`${cardType}__card  place-card ${isActive ? activeCardClassName : ''}`}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${cardType}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Room}/${offer.id}`} >
          <img className="place-card__image" src={offer.previewImage} width={isFavoritesCard ? '150' : '260' } height={isFavoritesCard ? '110' : '200' }
            alt={offer.title}
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47; night</span>
          </div>
          <button className={`place-card__bookmark-button ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref={'#icon-bookmark'}></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <Rating rating={offer.rating} cardType={cardClassNames.PlaceCard} />
        <h2 className="place-card__name">
          <Link to={`Offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
