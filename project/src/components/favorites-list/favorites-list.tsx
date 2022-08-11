import {Offer} from '../../types/offers';
// import {Cities} from '../../const';
// import FavoritesListItem from '../favorites-list-item/favorites-list-item';

type Props = {
  offers: Offer[],
}

function FavoritesList({offers}: Props): JSX.Element {
  return (
    <ul className="favorites__list">
      {/*{*/}
      {/*  Cities.map((city) => (<FavoritesListItem offers={offers} key={city.name} city={city.name} />))*/}
      {/*}*/}
    </ul>
  );
}

export default FavoritesList;
