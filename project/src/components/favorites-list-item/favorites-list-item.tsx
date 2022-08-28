import { Link } from 'react-router-dom';
import {Offer} from '../../types/offers';
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
          <Link className="locations__item-link" to="#">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer:Offer) => {
          if (city === offer.city.name) {
            return (<PlaceCard offer={offer} key={offer.id} cardType={'favorites'} isActive={false}/>);
          } else {
            return null;
          }
        })}
      </div>
    </li>
  );
}

export default FavoritesListItem;
