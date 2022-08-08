import {CardTypes} from '../../const';
import Map from '../map/map';
import PlaceCardList from '../place-card-list/place-card-list';
import {useAppSelector} from '../../hooks';
import { useNavigate} from 'react-router-dom';
import SortFilter from '../sort-filter/sort-filter';

function CitiesWithPlaces(): JSX.Element {

  const navigate = useNavigate();

  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);
  const filteredByNameOffers = offers.filter((offer) => offer.city.name === currentCity);
  const placesCount = filteredByNameOffers ? filteredByNameOffers.length : 0;

  return(
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} places to stay in {currentCity}</b>
        <SortFilter />

        <PlaceCardList cardType={CardTypes.Cities} offers={filteredByNameOffers} />

      </section>
      <div className="cities__right-section">
        <Map points={offers}/>
      </div>
    </div>
  );
}

export default CitiesWithPlaces;
