import {Offer} from '../../types/offers';
import FavoritesCard from '../favorites-card/favorites-card';
import PlaceCard from '../place-card/place-card';

type Props = {
  offers: Offer[],
  city: string,
}

function FavoritesListItem({offers, city}: Props) {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer:Offer) => {
          if (city === offer.city.name) {
            return (<PlaceCard offer={offer} key={offer.id} cardType={'favorites'} isActive={false}/>);
          }
        })}
      </div>
    </li>
  );
}

export default FavoritesListItem;
