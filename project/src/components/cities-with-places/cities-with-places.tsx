import {CardTypes, SortTypes} from '../../const';
import Map from '../map/map';
import PlaceCardList from '../place-card-list/place-card-list';
import {useAppSelector} from '../../hooks';
import SortFilter from '../sort-filter/sort-filter';
import {useState} from 'react';
import {sortOffers} from '../../tools/tools';

function CitiesWithPlaces(): JSX.Element {

  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);
  const filteredByNameOffers = offers.filter((offer) => offer.city.name === currentCity);
  console.log('currentCity', currentCity);
  console.log('filteredByNameOffers', filteredByNameOffers);
  const placesCount = filteredByNameOffers ? filteredByNameOffers.length : 0;

  const [selectedSortValue, setSelectedSortValue] = useState<SortTypes>(SortTypes.Default);

  const sortFilteredOffers = sortOffers(filteredByNameOffers, selectedSortValue);

  return(
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{placesCount} places to stay in {currentCity}</b>
        <SortFilter selectedSortValue={selectedSortValue} setSelectedSortValue={setSelectedSortValue}/>

        <PlaceCardList cardType={CardTypes.Cities} offers={sortFilteredOffers} />

      </section>
      <div className="cities__right-section">
        <Map currentCity={filteredByNameOffers[0].city} points={filteredByNameOffers} mapClassName={'cities'} cityName={currentCity}/>
      </div>
    </div>
  );
}

export default CitiesWithPlaces;
