import {CardTypes, SortTypes} from '../../const';
import Map from '../map/map';
import PlaceCardList from '../place-card-list/place-card-list';
import {useAppSelector} from '../../hooks';
import SortFilter from '../sort-filter/sort-filter';
import {useState} from 'react';
import {sortOffers} from '../../tools/tools';
import {getCurrentCity, getSortType} from '../../store/app-process/selectors';
import {getOffers} from '../../store/offers-data/selectors';



function CitiesWithPlaces(): JSX.Element {

  const currentCity = useAppSelector(getCurrentCity);
  const offers = useAppSelector(getOffers);
  const filteredByNameOffers = offers.filter((offer) => offer.city.name === currentCity);
  const placesCount = filteredByNameOffers ? filteredByNameOffers.length : 0;

  const selectedSortValue = useAppSelector(getSortType);

 // const [selectedSortValue, setSelectedSortValue] = useState<SortTypes>(SortTypes.Default);

  const sortFilteredOffers = sortOffers(filteredByNameOffers, selectedSortValue);

  return(
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} places to stay in {currentCity}</b>
        <SortFilter />

        <PlaceCardList cardType={CardTypes.Cities} offers={sortFilteredOffers} />

      </section>
      <div className="cities__right-section">
        <Map currentCity={filteredByNameOffers[0].city} points={filteredByNameOffers} mapClassName={'cities'} />
      </div>
    </div>
  );
}

export default CitiesWithPlaces;
