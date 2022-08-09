import Locations from '../../components/locations/locations';
import Layout from '../../components/layout/layout';
import { PageAttributes} from '../../const';
import CitiesWithPlaces from '../../components/cities-with-places/cities-with-places';
import CitiesNoPlaces from '../../components/cities-no-places/cities-no-places';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {loadOffers, loadReviews} from '../../store/action';
import {useEffect} from 'react';

function MainScreen(): JSX.Element {

  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offers);
  const filteredByNameOffers = offers.filter((offer) => offer.city.name === currentCity);

  return (
    <Layout pageAttributes={PageAttributes.Main}>
      <>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Locations />
        </div>
        <div className="cities">
          {filteredByNameOffers.length > 0 ? <CitiesWithPlaces /> : <CitiesNoPlaces />}
        </div>
      </>
    </Layout>
  );
}
export default MainScreen;
