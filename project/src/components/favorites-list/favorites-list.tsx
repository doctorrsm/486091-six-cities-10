import {Offer} from '../../types/offers';
import {getCityNamesFromOffers} from '../../tools/tools';
import FavoritesListItem from '../favorites-list-item/favorites-list-item';
// import {Cities} from '../../const';
// import FavoritesListItem from '../favorites-list-item/favorites-list-item';

type Props = {
  offers: Offer[],
}

function FavoritesList({offers}: Props): JSX.Element {
  const cityNames = getCityNamesFromOffers(offers);
  return (
    <>
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {cityNames.map((city) => (<FavoritesListItem offers={offers} key={city} city={city}/>))}
      </ul>
    </>
  );
}

export default FavoritesList;
