import {capitalizeFirstLetter, renderPremiumLabel} from '../../tools/tools';
import {Offer} from '../../types/offers';
import Rating from '../rating/rating';
import {AppRoute, cardClassNames} from '../../const';
import {generatePath, Link} from 'react-router-dom';

type Props = {
  offer: Offer;
}

function FavoritesCard({offer}: Props): JSX.Element {
  return (
    <article className="favorites__card place-card">
      {offer.isPremium ? renderPremiumLabel() : ''}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={generatePath(AppRoute.Room, {id: String(offer.id)})}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            alt="Place image"
            width={150}
            height={110}
          />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">
                          /&nbsp;night
            </span>
          </div>
          <button
            className="place-card__bookmark-button place-card__bookmark-button--active button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <Rating rating={offer.rating} cardType={cardClassNames.PlaceCard} />
        <h2 className="place-card__name">
          <Link to={generatePath(AppRoute.Room, {id: String(offer.id)})}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

export default FavoritesCard;
