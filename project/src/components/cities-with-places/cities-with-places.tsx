import ProposalList from '../proposal-list/proposal-list';
import {Navigate} from 'react-router-dom';
import {AppRoute, CardTypes} from '../../const';
import {Offer} from '../../types/offers';
import Map from '../map/map';
import PlaceCardList from '../place-card-list/place-card-list';
import {useAppSelector} from '../../hooks';
import { useNavigate} from 'react-router-dom';

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
        <form className="places__sorting" action="#" method="get">
          <span className="places__sorting-caption">Sort by</span>
          <span className="places__sorting-type" tabIndex={0}>
                                      Popular
            <svg className="places__sorting-arrow" width="7" height="4">
              <use xlinkHref={'#icon-arrow-select'}></use>
            </svg>
          </span>
          <ul className="places__options places__options--custom places__options--opened">
            <li className="places__option places__option--active" tabIndex={0}>Popular</li>
            <li className="places__option" tabIndex={0}>Price: low to high</li>
            <li className="places__option" tabIndex={0}>Price: high to low</li>
            <li className="places__option" tabIndex={0}>Top rated first</li>
          </ul>
        </form>

        <PlaceCardList cardType={CardTypes.Cities} offers={filteredByNameOffers} />

      </section>
      <div className="cities__right-section">
        <Map points={offers}/>
      </div>
    </div>
  );
}

export default CitiesWithPlaces;
